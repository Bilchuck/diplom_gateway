const sequelize = require('../')
const Sequelize = require('sequelize')

const Record = sequelize.define('records', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },

  temperature: Sequelize.FLOAT,
  time: Sequelize.DATE,
})

module.exports = Record
