const { Model, STRING, INTEGER } = require('sequelize')
const sequelize = require('../config')
// 
class ForgotPassword extends Model { }

ForgotPassword.init({
  userid: {
    type: INTEGER,
    allowNull: false
  },
  token: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'forgotpassword' })

module.exports = ForgotPassword