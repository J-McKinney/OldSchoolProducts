const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const AuthController = require("./controllers/auth");
const RegisterController = require("./controllers/register");

const PORT = process.env.PORT || 3001;

mongoose
  .connect(`mongodb://127.0.0.1:27017/OSPDB`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose connected successfully");
});
connection.on("error", (err) => {
  console.log("Mongoose default connection error: " + err);
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.use(express.static(path.join(__dirname, "client/build")));

// app.get("*", function (_, res) {
//   res.sendFile(
//     path.join(__dirname, "./client/build/index.html"),
//     function (err) {
//       if (err) {
//         res.status(500).send(err);
//       }
//     }
//   );
// });

// app.listen(process.env.PORT || 5000);
// module.exports = app;

app.use("/api/auth", AuthController);
app.use("/api/register", RegisterController);

app.use(express.static(__dirname + "/client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`App is running on http://localhost:${PORT}`);
});
