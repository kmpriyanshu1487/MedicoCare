import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => console.log('Database Connected'));
    mongoose.connection.on('error', (err) => console.error('Database Connection Error:', err));

    await mongoose.connect(`${process.env.MONGODB_URI}/medicocare`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
