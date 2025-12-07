import mongoose from "mongoose";
import debug from "debug";

const connectDB = async () => {
    const Log = debug("app:db");
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.DB_NAME || "mydatabase",
    });

    Log("🚀 MongoDB connected successfully");
    console.log("🚀 MongoDB connected successfully");
    Log(`📍 Host: ${conn.connection.host}`);
  } catch (err) {
    Log("❌ MongoDB connection failed");
    Log(err.message);
    process.exit(1); 
  }

  mongoose.connection.on("disconnected", () => {
    console.log("⚠️ MongoDB disconnected");
  });
};

export default connectDB;
