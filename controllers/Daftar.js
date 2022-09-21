const Users = require("../models/Users");
const argon2 = require("argon2");
const { validationResult } = require("express-validator");
const { renderFormDaftar } = require("../components/components");

const addUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    renderFormDaftar("danger", "Input Email harus berupa email", res);
  }
  const hash = await argon2.hash(req.body.password);
  const result = await Users.create({ ...req.body, password: hash });
  if (!result) renderFormDaftar("danger", "Gagal Mendaftar", res);
  renderFormDaftar("success", "Berhasil mendaftar", res);
};

const getAllUsers = async (req, res) => {
  const result = await Users.findAll({});
  if (result <= 0) res.json({ msg: "Data belum ada" });
  res.json({ msg: "Berikut data semua Users", msg: [result] });
};

module.exports = { addUser, getAllUsers };
