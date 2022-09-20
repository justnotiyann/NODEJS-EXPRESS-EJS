const Users = require("../models/Users");

const checkEmail = async (req, res, next) => {
  const result = await Users.findOne({ where: { email: req.body.email } });
  if (result) {
    res.json({ msg: "Email sudah dipakai silahkan buat kembali" });
  } else {
    next();
  }
};

module.exports = { checkEmail };
