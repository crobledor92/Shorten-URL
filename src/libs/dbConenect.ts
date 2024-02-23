import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI

if (!MONGO_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    )
}

const connectDB = async () => {
    await mongoose.connect(MONGO_URI)
}

export default connectDB

