const util = require('util')
const fs = require('fs')
const path = require('path')

const readFile = util.promisify(fs.readFile)
const readdir = util.promisify(fs.readdir)

let temperatureFile = null
const devices = '/sys/bus/w1/devices'
const fileName = 'w1_slave'
const bus = 'w1_bus_master1'

class NoDeviceError extends Error {}

const getDeviceFile = async () => {
  const dirs = await readdir(devices)
  const device = dirs.filter(dir => dir !== bus)[0]
  if (!device) {
    throw new NoDeviceError()
  }
  return path.join(devices, device, fileName)
}
const temperatureFromFile = async () => {
  const buffer = await readFile(temperatureFile, 'utf8')
  const temperature = buffer.split('t=')[1].split('\n')[0]
  return parseFloat(temperature) / 1000
}

const getTemperature = async () => {
  return 12
  if (!temperatureFile) {
    temperatureFile = await getDeviceFile()
  }
  return temperatureFromFile()
}

module.exports = {
  getTemperature,
  NoDeviceError
}
