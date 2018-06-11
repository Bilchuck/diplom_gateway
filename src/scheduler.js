const schedule = require('node-schedule')
const { getTemperature } = require('./services/temperature')
const fs = require('fs')
const path = require('path')
const util = require('util')

const appendFile = util.promisify(fs.appendFile)
const filePath = path.join(__dirname, 'records.txt')

const addRecord = content => appendFile(filePath, 'utf8', content)

const scheduler = () => {
  schedule.scheduleJob('*/5 * * * * *', async () => {
    const temperature = await getTemperature()
    const time = new Date().toISOString()
    await addRecord(`${temperature} | time`)
  })
}

module.exports = scheduler
