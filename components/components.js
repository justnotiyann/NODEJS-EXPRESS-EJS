const renderFormDaftar = (color, msg, res) => {
  res.render("partials/daftar", {
    layout: "./layout/main",
    title: "Halaman Utama",
    color: color,
    msg: msg,
  });
};

const renderMyTodo = (result, res) => {
  res.render("partials/myTodo", {
    layout: "./layout/main",
    title: "Halaman Utama",
    result,
  });
};

module.exports = { renderFormDaftar, renderMyTodo };
