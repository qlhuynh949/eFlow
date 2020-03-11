const { Model, STRING, INTEGER } = require('sequelize')
const sequelize = require('../config')
// 
class Upload extends Model { }

Upload.init({
  fileid: {
    type: STRING,
    allowNull: false
  },
  path: {
    type: STRING,
    allowNull: true
  },
  contents: {
    type: STRING,
    allowNull: true
  }
}, { sequelize, modelName: 'upload' })

module.exports = Upload