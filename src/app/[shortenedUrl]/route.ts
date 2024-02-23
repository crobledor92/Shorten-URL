import connectDB from "@/libs/dbConenect";
import { Url } from "@/models/Url.model";
import { IUrlDocument } from "@/libs/types";
import { redirect } from "next/navigation";

export const GET = async(_: Request, { params } : { params: { shortenedUrl: string }}) => {

    await connectDB();

    const shortenedUrl = params.shortenedUrl;
  
    const data: IUrlDocument | null = await Url.findOne({ shortenedUrl });
  
    console.log(data)

    if (!data) {
      redirect("/");
    }
  
    data.visits.push({
      date: new Date()
    })
  
    await data.save()
  
    redirect(data.url);
}