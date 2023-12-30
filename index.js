require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const port = process.env.port || 5000;
const mongoose = require("mongoose");
const router = require("./routes/todo.route");
const path = require("path");
const { urlencoded } = require("body-parser");
const routeError = require("./controller/error");
const expressSession = require("express-session");
const passport = require("passport");
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
  })
);
router.use(passport.initialize());
router.use(passport.session());
app.set("views engine", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ $extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
mongoose
  .connect(
    "mongodb+srv://rashilaramesh270:shErUn3ubsMQML7x@cluster0.sv3anlc.mongodb.net/todoLists"
  )
  .then(() => {
    console.log("connected");
  });
app.use("/", router);
app.listen(port);
