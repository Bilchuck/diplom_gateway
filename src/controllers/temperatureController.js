const { getTemperature, NoDeviceError } = require('../services/temperature')

const temperatureController = async (req, res) => {
  try {
    const temperature = await getTemperature()
    res.send({
      temperature
    })
  } catch (error) {
    if (error instanceof NoDeviceError) {
      res.send({
        temperature: null,
        error: 'No temperature device found!'
      })
    } else {
      res.send({
        temperature: null,
        error
      })
    }
  }
}

module.exports = temperatureController
