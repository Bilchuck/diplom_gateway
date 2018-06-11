const fs = require('fs')
const path = require('path')
const util = require('util')

const readFile = util.promisify(fs.readFile)
const appendFile = util.promisify(fs.appendFile)
const filePath = path.join(__dirname, 'records.txt')

const appendData = content => appendFile(filePath, `${content}\n`, 'utf8')

const getData = async () => {
  const data = await readFile(filePath, 'utf8')
  const chart = data.split('\n').map(row => {
    const [temperature, time] = row.split(' | ')
    return {
      temperature,
      time
    }
  })
  return chart
}

module.exports = {
  getData,
  appendData
}
