const schedule = require('node-schedule')
const { getTemperature } = require('./services/temperature')
const Record = require('./db/models/record')

const job = schedule.scheduleJob('*/5 * * * * *', async () => {
  const temperature = await getTemperature()
  await Record.create({
    temperature,
    time: new Date()
  })
})

const scheduler = () => {
  job.start()
}

module.exports = scheduler
