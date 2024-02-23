import connectDB from "@/libs/dbConenect";
import { User } from "@/models/User.model";
import { IUser } from "@/libs/types";

export const GET = async () => {
  await connectDB();

  const users = await User.find();
  return Response.json(users);
};

export const POST = async (req: Request) => {
  await connectDB();

  try {
    const userData: IUser = await req.json();
    const newUser = await new User(userData);
    const savedUser = await newUser.save();

    return Response.json({ data: savedUser }, { status: 201 });
  } catch (error: any) {
    if (error.name === "MongoServerError" && error.code === 11000) {
      return Response.json(
        { code: 11000, message: "Some value already exists in a unique field" },
        { status: 500 }
      );
    }
    return Response.json(
      { code: 0, message: "There was an error" },
      { status: 500 }
    );
  }
};
