module.exports = app => {
  const presupuesto = require('../controllers/presupuesto.controller.js')

  var router = require('express').Router()

  // Create
  router.post('/', presupuesto.create)

  // Get All
  router.get('/', presupuesto.getAll)
  
  // Get Group by
  router.get('/', presupuesto.groupAll)

  // Update
  router.put('/:id', presupuesto.update)

  // Get by Id
  router.get('/:id', presupuesto.findOne)

  app.use('/api/presupuesto', router)
}
