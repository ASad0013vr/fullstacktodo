const todo = require("../model/todo.model.js");
const deleteTodo = async (req, res) => {
  let { id } = req.params;
  console.log(id);
  let deletedTodo = await todo.findOneAndDelete({ _id: id });
  res.render("deleteTodo.ejs", { deletedTodo });
};

module.exports = deleteTodo;
