const Daftar = require("../controllers/Daftar");
const Validator = require("../middleware/Validator");
const router = require("express").Router();
const { body } = require("express-validator");
const { renderFormDaftar } = require("../components/components");

// GET localhost:3000/daftar
router.get("/", (req, res) => {
  renderFormDaftar("", "", res);
});
// POST localhost:3000/daftar Handling data daftar
router.post("/", body("email").isEmail(), Validator.checkBody, Validator.checkEmail, Daftar.addUser);
router.get("/all", Daftar.getAllUsers);

module.exports = router;
