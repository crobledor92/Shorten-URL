import connectDB from "@/libs/dbConenect";
import { IUrl, IUrlDocument } from "@/libs/types";
import { isValidUrl } from "@/libs/utils/urlValidator";
import { Url } from "@/models/Url.model";
import { User } from "@/models/User.model";

export const POST = async (req: Request) => {
  try {
    await connectDB();

    const { url, user } = await req.json();

    const isValid = await isValidUrl(url);
    if (!isValid) {
      return Response.json({ message: "Invalid URL" }, { status: 400 });
    }

    const shortenedUrl = Math.random().toString(36).substring(2, 6);

    const urlObject: IUrl = {
      url,
      shortenedUrl,
      user,
      visits: [],
    };

    const newUrl = await new Url(urlObject);
    const savedUrl = await newUrl.save();
    return Response.json(
      { shortenedUrl: savedUrl.shortenedUrl },
      { status: 201 }
    );
  } catch (error: any) {
    return Response.json(
      { code: 0, message: "There was an error" },
      { status: 500 }
    );
  }
};

export const GET = async (request: Request) => {

  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('id');

  try {
    await connectDB()

    const userExists = await User.findById(userId)

    if(!userExists) {
      return Response.json({ message: "Invalid user email" }, { status: 400 })
    }
    
    const shortnedUrls: IUrlDocument[] | null = await Url.find({ user: userExists.id })
    
    return Response.json({ urls: shortnedUrls }, { status: 200 });
    // return Response.json(shortnedUrls);
  } catch (error) {
    console.log(error)
    return Response.json({ message: "There was an error trying to get user's shortened URLs" }, { status: 400 });
  }
}