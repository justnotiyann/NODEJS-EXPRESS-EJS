const Users = require("../models/Users");
const { RenderUI, renderFormDaftar } = require("../middleware/RenderComponent");

const checkEmail = async (req, res, next) => {
  const result = await Users.findOne({ where: { email: req.body.email } });
  if (result) {
    renderFormDaftar("danger", "Email sudah digunakan silahkan gunakan emai yang berbeda", res);
    // res.json({ msg: "Email sudah dipakai silahkan buat kembali" });
  } else {
    next();
  }
};

const checkBody = async (req, res, next) => {
  const { name, email, password } = req.body;
  if ((name, email, password == null || name, email, password == "")) {
    renderFormDaftar("danger", "Harap masukkan data dengan benar", res);
    // res.json({ msg: "Harap lengkap data dengan valid" });
  } else {
    next();
  }
};

module.exports = { checkEmail, checkBody };
