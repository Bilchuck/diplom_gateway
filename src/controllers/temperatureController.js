const getTemperature = require('../services/temperature')

const temperatureController = (req, res) => {
  const temperature = getTemperature()
  res.send({
    temperature
  })
}

module.exports = temperatureController
