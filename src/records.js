const fs = require('fs')
const path = require('path')
const util = require('util')

const readFile = util.promisify(fs.readFile)
const appendFile = util.promisify(fs.appendFile)
const filePath = path.join(__dirname, 'records.txt')

const appendData = content => appendFile(filePath, `${content}\n`)

const getData = async () => {
  const data = await readFile(filePath)
  const chart = data.split('\n').map(row => {
    const [temp, time] = row.split(' | ')
    return {
      temp,
      time
    }
  })
  return chart
}

module.exports = {
  getData,
  appendData
}
