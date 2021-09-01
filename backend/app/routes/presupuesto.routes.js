module.exports = app => {
  const presupuesto = require('../controllers/presupuesto.controller.js')

  var router = require('express').Router()

  // Crear un nuevo presupuesto
  router.post('/', presupuesto.create)

  app.use('/api/presupuesto', router)
}
