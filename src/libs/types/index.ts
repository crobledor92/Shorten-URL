import { Document, Types } from "mongoose";

export interface IUrl {
    url: string;
    shortenedUrl: string;
    user: Types.ObjectId;
    visits: {
        date: Date;
    }[]
}

export interface IUrlDocument extends Document, IUrl {
    createdAt: Date;
    updatedAt: Date;
}

export interface IUser {
    email: string;
    password?: string;
    provider: string
}

export interface IUserDocument extends Document, IUser {
}


export type RegisterState = {
    success: boolean;
    message: string;
};

export type UserCredentials = {
    email: string;
    password?: string;
    id: string
}