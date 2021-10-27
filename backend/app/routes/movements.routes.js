module.exports = app => {
  const movements = require('../controllers/movements.controller.js')

  var router = require('express').Router()

  // Create movements
  router.post('/', movements.create)

  app.use('/api/movements', router)
}
