import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://radhikayadav2409_db_user:nrmrdDLzO26Z8nuE@cluster0.37ppjfx.mongodb.net/food-delivery?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("DB connected");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};