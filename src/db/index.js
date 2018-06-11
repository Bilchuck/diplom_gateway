const Sequelize = require('sequelize')

const sequelize = new Sequelize('temperature', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  multipleStatements: true,
  charset: 'UTF8_GENERAL_CI',
  connectionLimit: 10,
  socketPath: '/run/mysqld/mysqld.sock',
})

module.exports = sequelize
