const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize(process.env.DATABASE, process.env.USER_DATA, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT,
});

const result = db.authenticate();
if (!result) throw new Error("Gagal membuat database");

module.exports = db;
