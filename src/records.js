const fs = require('fs')
const path = require('path')
const util = require('util')

const readFile = util.promisify(fs.readFile)
const appendFile = util.promisify(fs.appendFile)
const exists = util.promisify(fs.exists)
const writeFile = util.promisify(fs.writeFile)
const filePath = path.join(__dirname, 'records.txt')

const appendData = async content => {
  const data = await readFile(filePath, 'utf8')
  const array = data.split('\n')
  const start = array.slice(-49)

  const newFile = [...start, content].join('\n')
  await saveDb(newFile)
}

const saveDb = async content => {
  await writeFile(filePath, content, 'utf8')
}

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

const createIfNotExistsDb = async () => {
  const fileExists = await exists(filePath)
  if (!fileExists) {
    try {
      await saveDb('')
    } catch (e) {
      consolel.log(e)
    }
  }
}

module.exports = {
  getData,
  appendData,
  createIfNotExistsDb
}
