import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";
import { IUser } from "@/libs/types";

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String },
    provider: { 
      type: String,
      enum: ['google', 'credentials'],
      required: true
    }
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  const user = this;

  if (user.password && (user.isModified("password") || user.isNew)) {
    const psswd = user.password
    bcrypt.genSalt(10, (saltError, salt) => {
      if (saltError) {
        return next(saltError);
      } else {
        bcrypt.hash(psswd, salt, (hashError, hash) => {
          if (hashError) {
            return next(hashError);
          }
          user.password = hash;
          next();
        });
      }
    });
  } else {
    return next();
  }
});

userSchema.methods.comparePassword = function (password: string, callback: any) {
  bcrypt.compare(password, this.password, (error, isMatch) => {
    if (error) {
      return callback(error)
    } else {
      callback(null, isMatch)
    }
  } )
}

export const User = models?.User || model<IUser>("User", userSchema);
