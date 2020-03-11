const { Model, STRING, INTEGER, BOOLEAN } = require('sequelize')
const sequelize = require('../config')
// 
class Message extends Model { }

// sender: {
//   type: INTEGER,
//     allowNull: false
// },

Message.init({
  text: {
    type: STRING,
    allowNull: false
  },
  convoToken: {
    type: STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'message' })

module.exports = Message
