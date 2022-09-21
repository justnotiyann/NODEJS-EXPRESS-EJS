const Users = require("../models/Users");
const { renderFormDaftar } = require("../components/components");

const checkEmail = async (req, res, next) => {
  const result = await Users.findOne({ where: { email: req.body.email } });
  if (result) renderFormDaftar("danger", "Email sudah digunakan silahkan gunakan emai yang berbeda", res);
  next();
};

const checkBody = async (req, res, next) => {
  const { name, email, password } = req.body;
  if ((name, email, password == null || name, email, password == "")) renderFormDaftar("danger", "Harap masukkan data dengan benar", res);
  next();
};

module.exports = { checkEmail, checkBody };
