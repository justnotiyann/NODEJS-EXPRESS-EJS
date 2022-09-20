const Users = require("../models/Users");
const argon2 = require("argon2");

const addUser = async (req, res) => {
  const hash = await argon2.hash(req.body.password);
  const result = await Users.create({ ...req.body, password: hash });
  if (!result) res.json({ msg: "Terjadi kesalahan" });
  res.json({ msg: "Berhasil membuat data", result: [result] });
};

const getAllUsers = async (req, res) => {
  const result = await Users.findAll({});
  if (result <= 0) res.json({ msg: "Data belum ada" });
  res.json({ msg: "Berikut data semua Users", msg: [result] });
};

module.exports = { addUser, getAllUsers };
