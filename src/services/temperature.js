const util = require('util')
const fs = require('fs')
const path = require('path')

const readFile = util.promisify(fs.readFile)
const readdir = util.promisify(fs.readdir)

let deviceFilePath = null
const devicesPath = '/sys/bus/w1/devices'
const deviceFile = 'w1_slave'
const notDevicesIds = 'w1_bus_master1'

const getDeviceFile = () => {
  return readdir(devicesPath)
    .then(dirs => dirs.filter(dir => dir !== notDevicesIds)[0])
    .then(dir => path.join(devicesPath, dir, deviceFile))
    .then(path => {
      deviceFilePath = path
    })
}
const temperatureFromFile = () => readFile(deviceFilePath, 'utf8')
  .then(str => str.split('t=')[1].split('\n')[0])

const getTemperature = () => {
  return deviceFilePath
    ? temperatureFromFile()
    : getDeviceFile().then(() => temperatureFromFile())
}

module.exports = getTemperature
