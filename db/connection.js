import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewurlParser: true,
      useUnifiedTopology: true,
      dbName: "user",
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
