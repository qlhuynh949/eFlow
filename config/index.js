const Sequelize = require('sequelize')

// const sequelize = new Sequelize('mysql://root:admin@localhost:3306/eflow')
const Op = Sequelize.Op

const sequelize = new Sequelize('mysql://c209p3iee3snfxhw:k1b6iv4if637owrc@nba02whlntki5w2p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/q3p72mds4851vgnu')
// const sequelize = new Sequelize('mysql://root:spikey11@localhost:3306/eFLow')

module.exports = sequelize
