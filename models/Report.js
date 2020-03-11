const { Model, STRING, INTEGER } = require('sequelize')
const sequelize = require('../config')
// 
class Report extends Model { }

Report.init({
  comment: {
    type: STRING,
    allowNull: false
  },
  status: {
    type: INTEGER,
    allowNull: false
  },
  resolution: {
    type: INTEGER,
    allowNull: false
  }
}, { sequelize, modelName: 'report' })

module.exports = Report