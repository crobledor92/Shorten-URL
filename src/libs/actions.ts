"use server";

import connectDB from "@/libs/dbConenect";
import { Url } from "@/models/Url.model";
import { IUrl, IUrlDocument, IUser, UserCredentials } from "@/libs/types";
import { CustomError } from "@/libs/utils/customError";
import { isValidUrl } from "@/libs/utils/urlValidator";
import { User } from "@/models/User.model";
import { User as NextUser } from "next-auth";

export const shortenUrl = async (_: any, formData: FormData, userEmail: string | null | undefined) => {

  console.log(formData.get("urlInput"))
  console.log(userEmail)
  
  try {
    await connectDB();

    const userExists = await User.findOne({ email: userEmail })

    if(!userExists) {
      return null
    }

    const data = {
      user: userExists.id,
      url: formData.get("urlInput") as string,
    };

    const isValid = await isValidUrl(data.url);
    if (!isValid) {
      throw new CustomError("Invalid URL", "INVALID_URL");
    }

    const shortenedUrl = Math.random().toString(36).substring(2, 6);

    const urlObject: IUrl = {
      url: data.url,
      shortenedUrl,
      user: Object(data.user),
      visits: [],
    };

    const newUrl = await new Url(urlObject);
    const savedUrl = await newUrl.save();
    return savedUrl.shortenedUrl;
  } catch (error: any) {
    console.log(error);
    console.log(error.code);
    return null;
  }
};

export const getUserUrls = async (userEmail: string) => {
  try {
    await connectDB();

    const userExists = await User.findOne({ email: userEmail })

    if(!userExists) {
      return null
    }

    const shortnedUrls: IUrlDocument[] | null = await Url.find({ user: userExists.id })
    
    if (!shortnedUrls) {
      console.log("Se ejecuta esto!!!!!")
      return null
    }

    // console.log("LAS URLS DEL USUARIO SON", shortnedUrls)

    // return "shortnedUrls"
    return shortnedUrls
  } catch (error) {
    console.log(error)
    return null
  }
}

export const getUserData = async(userEmail: string) => {
  const userExists = await User.findOne({ email: userEmail })

  return userExists
}

export const signInWithCredentials = async (user: UserCredentials, provider: string) => {
  const userData = {
    email: user.email,
    password: user.password,
    provider: provider
  }

  try {
    await connectDB()

    const userExists = await User.findOne({ email: userData.email })

    console.log("DB user is: ", userExists)

    if(!userExists) {
      const savedUser = await createUser(userData)
      return savedUser ?  true :  false
    } else {
      const psswdIsCorrect = await new Promise<boolean>((resolve) => {
        userExists.comparePassword(userData.password, function(matchError: Error, isMatch: boolean) {
          if(matchError) {
            console.log("incorrect password")
            resolve(false)
          } else if (!isMatch) {
            console.log("incorrect password")
            resolve(false)
          } else {
            resolve(true)
          }
        })
      })

      return psswdIsCorrect
    }
  } catch(error) {
    console.log("error catched")
    console.log(error)
    return false
  }

}

export const signInWithGoogle = async (user: NextUser, provider: string) => {
  const { email } = user

  try {
    await connectDB()

    const userExists = await User.findOne({ email })

    if(userExists) {
      return true
    }

    const userData = {
      email: email!,
      provider
    }

    const savedUser = await createUser(userData)

    if(!savedUser) {
      return false
    }

    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

const createUser = async (userData: IUser) => {
  const newUser = await new User(userData);
  const savedUser = await newUser.save();
  return savedUser
}

