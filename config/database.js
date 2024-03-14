import mongoose from "mongoose";
let conntected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (conntected) {
    console.log("MongoDB is already connected ...");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    conntected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectDB;
