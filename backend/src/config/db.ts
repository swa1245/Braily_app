import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectdb = async () => {
  try {
    const mongodbUrl = process.env.MONGODB_URL;
    if (!mongodbUrl) {
      throw new Error(
        "MONGODB_URL is not defined in the environment variables"
      );
    }
    await mongoose.connect(mongodbUrl);
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
};
