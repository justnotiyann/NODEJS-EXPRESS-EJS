const db = require("../config/db");
const DataTypes = require("sequelize");

const Todo = db.define(
  "todo",
  {
    todo: DataTypes.STRING,
    deadline: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

const result = Todo.sync({});
if (!result) console.log("Gagal membuat database");
console.log("Berhasil membuat database");

module.exports = Todo;
