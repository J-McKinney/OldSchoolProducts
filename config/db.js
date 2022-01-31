const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_CONNECTION, {
      // await mongoose.connect("mongodb://127.0.0.1:27017/OldSchoolProducts", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection is SUCCESSFUL");
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
};

module.exports = connectDB;
