const fetch = require('node-fetch')
const databaseURL = 'https://temperature-db-927c6.firebaseio.com'

const push = async data => {
  try {
    await fetch(`${databaseURL}/temperatures.json`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  } catch (e) {
    console.log(`No connection to internet. Skip request`)
  }
}

module.exports = {
  push
}
