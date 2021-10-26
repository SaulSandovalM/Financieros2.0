module.exports = app => {
  const presupuesto = require('../controllers/presupuesto.controller.js')

  var router = require('express').Router()

  // Create
  router.post('/', presupuesto.create)

  // Get All
  router.get('/', presupuesto.getAll)
  
  // Get Up
  router.get('/up', presupuesto.upAll)

  // Params Ogasto
  router.put('/ogasto', presupuesto.ogastoAll)

  //  Params Rubro
  router.put('/rubro', presupuesto.rubroAll)

  // Update
  router.put('/:id', presupuesto.update)

  // Get by Id
  router.get('/:id', presupuesto.findOne)

  app.use('/api/presupuesto', router)
}
