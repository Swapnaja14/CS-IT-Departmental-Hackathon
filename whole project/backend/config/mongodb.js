// import mongoose from "mongoose";

// const connectDB = async () => {

//     mongoose.connection.on('connected', () => console.log("Database Connected"))
//     await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)

// }

// export default connectDB;

// // Do not use '@' symbol in your databse user's password else it will show an error.
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    // Log successful connection
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // Handle connection errors
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1); // Exit the process if the database fails to connect
  }
};

export default connectDB;
