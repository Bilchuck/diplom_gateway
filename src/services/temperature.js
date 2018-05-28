const util = require('util')
const fs = require('fs')

const readFile = util.promisify(fs.readFile)
const readdir = util.promisify(fs.readdir)

let deviceId = null
const devicesPath = '/sys/bus/w1/devices'
const deviceFile = 'w1_slave'
const notDevicesIds = ['w1_bus_master1']

const findDeviceId = () => {

}

const getTemperature = () => {
  return 12
}

module.exports = getTemperature
