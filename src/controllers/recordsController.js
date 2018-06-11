const fs = require('fs')
const path = require('path')
const util = require('util')

const readFile = util.promisify(fs.readFile)
const filePath = path.join(__dirname, 'records.txt')

const getData = async () => {
  const data = await readFile(filePath, 'utf8')
  const chart = data.split('\n').map(row => {
    const [temp, time] = row.split(' | ')
    return {
      temp,
      time
    }
  })
}

const recordsController = async (req, res) => {
  const chart = await getData()
  res.send(chart)
}

module.exports = recordsController
