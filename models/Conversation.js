const { Model, INTEGER, STRING } = require('sequelize')
const sequelize = require('../config')
// 
class Conversation extends Model { }

Conversation.init({
  user1: {
    type: INTEGER,
    allowNull: false
  },
  user2: {
    type: INTEGER,
    allowNull: false
  },
  chatName: {
    type: STRING,
    allowNull: false
  },
  chatToken: {
    type: STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'conversation' })

module.exports = Conversation
