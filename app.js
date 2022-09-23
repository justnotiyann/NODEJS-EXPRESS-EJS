var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var ejsLayout = require("express-ejs-layouts");

var app = express();
app.listen(3000, () => {
  console.log("server berjalan");
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(ejsLayout);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

var indexRouter = require("./routes/index");
const daftarRouter = require("./routes/daftar");
const myTodoRoutes = require("./routes/mytodo");
app.use("/PROJECT-TODO-LIST", indexRouter);
app.use("/PROJECT-TODO-LIST/mytodo", myTodoRoutes);
app.use("/PROJECT-TODO-LIST/daftar", daftarRouter);

module.exports = app;
