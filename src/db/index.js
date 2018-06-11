const Sequelize = require('sequelize')

const sequelize = new Sequelize('temperature', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = sequelize
