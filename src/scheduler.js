const schedule = require('node-schedule')
const { getTemperature } = require('./services/temperature')
const { appendData, createIfNotExistsDb } = require('./records')
const { push: firebasePush } = require('./services/firebase')

let i = 1
const scheduler = () => {
  createIfNotExistsDb().then(() => {
    schedule.scheduleJob('*/1 * * * * *', async () => {
      const temperature = await getTemperature()
      const time = new Date().toISOString()
      await appendData(`${temperature} | ${time}`)
      i++
      if (i % 5 === 0) {
        await firebasePush({
          temperature,
          time
        })
      }
    })
  })
}

module.exports = scheduler
