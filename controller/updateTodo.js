const todo = require("../model/todo.model");
const updateTodo = async (req, res) => {
  let { id } = req.params;
  let { title, description } = req.body;
  let updatedTodo = await todo.findOneAndUpdate(
    { _id: id },
    { $set: { title: title, description: description } }
  );
  res.redirect("/viewTodo");
};
const updateTodoGet = async (req, res) => {
  let { id } = req.params;
  let update = await todo.findOne({ _id: id });
  res.render("updateTodo.ejs", { update });
};
module.exports = { updateTodoGet, updateTodo };
