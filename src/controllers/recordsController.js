const { getData } = require('../records')

const recordsController = async (req, res) => {
  const chart = await getData()
  res.send(chart)
}

module.exports = recordsController
