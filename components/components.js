const renderFormDaftar = (color, msg, res) => {
  res.render("partials/daftar", {
    layout: "./layout/main",
    title: "Halaman Utama",
    color: color,
    msg: msg,
  });
};

module.exports = { renderFormDaftar };
