const Sequelize = require('sequelize')

const sequelize = Sequelize('', 'root', '', {
  host: 'localhost'
})

module.exports = sequelize
