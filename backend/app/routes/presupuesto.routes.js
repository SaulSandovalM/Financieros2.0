module.exports = app => {
  const presupuesto = require('../controllers/presupuesto.controller.js')

  var router = require('express').Router()

  // Create
  router.post('/', presupuesto.create)

  // Get All
  router.get('/', presupuesto.getAll)
  
  // Get Up
  router.get('/up', presupuesto.upAll)

  // Get Ogasto
  router.put('/ogasto', presupuesto.ogastoAll)

  // Update
  router.put('/:id', presupuesto.update)

  // Get by Id
  router.get('/:id', presupuesto.findOne)

  app.use('/api/presupuesto', router)
}
