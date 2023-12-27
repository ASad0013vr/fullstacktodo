const todo = require("../model/todo.model.js");

const viewTodo = async (req, res) => {
  let { kwd } = req.query;
  if (!kwd) {
    let v = await todo.find({});
    let view = [...v].reverse();

    res.render("viewTodo.ejs", { view });
  } else if (kwd) {
    let key = new RegExp(kwd, "i");
    let v = await todo.find({
      $or: [{ title: { $regex: key } }, { description: { $regex: key } }],
    });
    let view = [...v].reverse();
    res.status(200).render("viewTodo.ejs", { view, kwd });
  }
};

module.exports = viewTodo;
