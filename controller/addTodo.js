const todo = require("../model/todo.model.js");
const addTodo = async (req, res) => {
  let { title, description } = req.body;
  let newTodo = await todo.create({
    title: title,
    description: description,
  });

  res.redirect("/viewTodo");
};
const addTodoGet = (req, res) => {
  res.render("addTodo.ejs");
};

module.exports = { addTodo, addTodoGet };
