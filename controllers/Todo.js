const Todo = require("../models/Todo");
const components = require("../components/components");

const addTodo = async (req, res) => {
  const result = await Todo.create({ ...req.body });
  if (!result) res.json("Gagal membuat todo");
  res.json({ result });
};

const getTodo = async (req, res) => {
  const result = await Todo.findAll({});
  if (!result) res.json("Gagal membuat todo");
  components.renderMyTodo(result, res);
};

const getTodoJSON = async (req, res) => {
  const result = await Todo.findAll({});
  if (result <= 0) res.json({ msg: "Data belum ada !" });
  if (!result) res.json("Gagal membuat todo");
  res.json({ result });
};

const deleteTodo = async (req, res) => {
  const result = await Todo.destroy({ where: { id: req.params.id } });
  if (result <= 0) res.json({ msg: "Data tidak ditemukan" });
  if (!result) res.json({ msg: "Data gagal dihapus" });
  res.json({ msg: "Berhasil Dihapus !" });
};

module.exports = { addTodo, getTodo, deleteTodo, getTodoJSON };
