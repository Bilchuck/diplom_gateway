const firebase = require('firebase')

const app = firebase.initializeApp({
  databaseURL: 'https://temperature-db-927c6.firebaseio.com/'
})

const db = app.database()

const push = async data => {
  try {
    await db.ref('/').push(data)
  } catch (e) {
    console.log(`No connection to internet. Skip request`)
  }
}

module.exports = {
  push
}
