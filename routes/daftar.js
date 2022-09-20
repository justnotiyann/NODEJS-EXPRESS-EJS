const Users = require("../models/Users");
const Daftar = require("../controllers/Daftar");
const Validator = require("../middleware/Validator");
const router = require("express").Router();

// GET localhost:3000/daftar
router.get("/", async (req, res) => {
  // render home page login
  res.render("partials/daftar", {
    layout: "./layout/main",
    title: "Halaman Utama",
  });
});

// POST localhost:3000/daftar Handling data daftar
router.post("/", Validator.checkEmail, Daftar.addUser);

router.get("/all", Daftar.getAllUsers);

module.exports = router;
