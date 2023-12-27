const mongoose = require("mongoose");
const details = new mongoose.Schema({
  title: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
  description: {
    type: String,
  },
});
const todo = mongoose.model("Todo List", details);
module.exports = todo;
