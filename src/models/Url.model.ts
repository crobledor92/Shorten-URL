import { Schema, model, models } from "mongoose";
import { User } from "./User.model";
import { IUrl } from "@/libs/types";
import { CustomError } from "@/libs/utils/customError";

const urlSchema = new Schema(
  {
    url: { type: String, required: true },
    shortenedUrl: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    visits: [
      {
        date: { type: Date, default: Date.now, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

urlSchema.pre("save", async function (next) {
  try {
    const userExists = await User.findById(this.user);
    if (!userExists) {
      const error = new CustomError(
        "Referenced user does not exist",
        "USER_NOT_FOUND"
      );
      throw error;
    }
  } catch (error: any) {
    next(error);
  }
});

export const Url = models?.Url || model<IUrl>("Url", urlSchema);
