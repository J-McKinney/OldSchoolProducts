require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_CONNECTION, {
    // await mongoose.connect("mongodb://127.0.0.1:27017/OldSchoolProducts", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection is SUCCESSFUL config/db.js");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    console.error("MongoDB connection FAIL config/db.js");
    process.exit(1);
  }
};

module.exports = connectDB;
