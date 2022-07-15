import mongoose from "mongoose";
import { config } from "dotenv";

config();
const mongoURI = process.env.NODE_MONGO_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`1 Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
