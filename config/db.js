const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize(process.env.DATABASE, process.env.USER_DATA, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

const result = db.authenticate();
if (!result) throw new Error("Gagal membuat database");

module.exports = db;
