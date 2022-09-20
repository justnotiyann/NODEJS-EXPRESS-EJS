const db = require("../config/db");
const DataTypes = require("sequelize");

const Users = db.define(
  "users",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const result = Users.sync({});
if (!result) throw new Error("Gagal membuat database");

module.exports = Users;
