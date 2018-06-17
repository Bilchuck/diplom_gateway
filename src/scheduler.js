const schedule = require('node-schedule')
const { getTemperature } = require('./services/temperature')
const { appendData, createIfNotExistsDb } = require('./records')

const scheduler = () => {
  createIfNotExistsDb().then(() => {
    schedule.scheduleJob('*/5 * * * * *', async () => {
      const temperature = await getTemperature()
      const time = new Date().toISOString()
      await appendData(`${temperature} | ${time}`)
    })
  })
}

module.exports = scheduler
