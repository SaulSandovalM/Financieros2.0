module.exports = app => {
  const tutorials = require('../controllers/tutorial.controller.js')

  var router = require('express').Router()

  // Crear un nuevo Tutorial
  router.post('/', tutorials.create)

  // Traer todos los tutoriales
  router.get('/', tutorials.findAll)

  // Traer todos los tutoriales publicados
  router.get('/published', tutorials.findAllPublished)

  // Traer solo un tutorial por id
  router.get('/:id', tutorials.findOne)

  // Actualizar por id
  router.put('/:id', tutorials.update)

  // Borrar por id
  router.delete('/:id', tutorials.delete)

  // Borrar todo
  router.delete('/', tutorials.deleteAll)

  app.use('/api/tutorials', router)
}
