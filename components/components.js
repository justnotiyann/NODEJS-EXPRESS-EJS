const renderFormDaftar = (color, msg, res) => {
  res.render("partials/daftar", {
    layout: "./layout/main",
    title: "Halaman Utama",
    color: color,
    msg: msg,
  });
};

const renderMyTodo = (jika = 0, color, msg, result, res) => {
  res.render("partials/myTodo", {
    layout: "./layout/main",
    title: "Halaman Utama",
    jika,
    color,
    msg,
    result,
  });
};

const renderAlert = (msg, color, res) => {
  res.render("partials/alert", {
    layout: "./layout/main",
    title: "Halaman Utama",
    msg,
    color,
  });
};

module.exports = { renderFormDaftar, renderMyTodo, renderAlert };
