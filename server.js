const express = require("express");
const app = express();

const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb://127.0.0.1:27017/OldSchoolProducts`,
    // "mongodb+srv://jessemckinney513:Icnrmmp1@cluster0.h9eeq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));

const UsernameModel = require("./models/username");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post("/api/post", async function (req, res) {
  const { text } = req.body;

  const newUsername = new UsernameModel({
    username: text.toString(),
  });

  await newUsername.save();
});

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.listen(process.env.PORT || 5000);
module.exports = app;
