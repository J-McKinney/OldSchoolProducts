const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsernameSchema = new Schema({
  username: String,
});
const Username = mongoose.model("username", UsernameSchema);

module.exports = Username;
