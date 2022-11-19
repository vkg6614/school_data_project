import mongoose from "mongoose";

const connectDB = async (DB_URL) => {
  try {
    await mongoose.connect(`${DB_URL}`, {
      dbName: process.env.DB_NAME,
    });
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
