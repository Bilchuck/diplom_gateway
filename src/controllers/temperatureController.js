const getTemperature = require('../services/temperature')

const temperatureController = (req, res) => {
  return getTemperature().then(temperature => {
    res.send({
      temperature
    })
  })
}

module.exports = temperatureController
