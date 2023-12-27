const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = await user.register({ username }, password);

    if (newUser) {
      passport.authenticate("local")(req, res, () => {
        res.redirect("/viewTodo");
      });
    } else {
      res.redirect("/register");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
const loginGet = (req, res) => {
  res.render("Login.ejs");
};
module.exports = { login, loginGet };
