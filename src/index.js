const runServer = require('./app')
const runScheduler = require('./scheduler')

console.log('Starting app..')
console.log('Starting server..')

runServer()
runScheduler()