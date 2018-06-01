const express = require('express')
const cors = require('cors')
const PORT = 1332
const temperatureController = require('./controllers/temperatureController')

const runServer = () => {
  const app = express()

  app.use(cors())
  app.get('/is_gateway', (req, res) => res.send())
  app.get('/temperature', temperatureController)

  app.listen(PORT, () => {
    console.log(`The serrver is running on ${PORT} port!`)
  })
}

module.exports = runServer
