const { Model, STRING, INTEGER } = require('sequelize')
const sequelize = require('../config')
// 
class FAQ extends Model { }

FAQ.init({
  Description: {
    type: STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'FAQ' })

module.exports = FAQ