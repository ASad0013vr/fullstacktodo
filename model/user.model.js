const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
const userDetails = new mongoose.Schema({
  username: String,
  password: String,
});
mongoose.plugin(plm);
const users = mongoose.model("Users", userDetails);
