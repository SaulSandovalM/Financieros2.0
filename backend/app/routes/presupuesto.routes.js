module.exports = app => {
  const presupuesto = require('../controllers/presupuesto.controller.js')

  var router = require('express').Router()

  // Crear un nuevo presupuesto
  router.post('/', presupuesto.create)

  // Traer el presupuesto
  router.get('/', presupuesto.findAll)

  // Actualizar el presupuesto
  router.put('/:id', presupuesto.update)

  // Traer partida con id
  router.get('/:id', presupuesto.findOne)

  app.use('/api/presupuesto', router)
}
