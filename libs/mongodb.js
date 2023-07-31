import mongoose from "mongoose";

const connMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to mongodb");
  } catch (error) {
    console.error(error);
  }
};

export default connMongodb;
