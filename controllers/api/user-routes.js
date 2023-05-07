console.log("Sequelize version:", require('sequelize').version);
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcryptjs = require('bcryptjs');

class User extends Model {
  checkPassword(loginPw) {
    return bcryptjs.compareSync(loginPw, this.password);
  }
}
