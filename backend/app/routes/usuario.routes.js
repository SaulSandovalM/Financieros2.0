module.exports = app => {
  const usuarios = require('../controllers/usuario.controller.js')

  var router = require('express').Router()

  // Crear un nuevo Usuario
  router.post('/registro', usuarios.create)

  // Traer todos los tutoriales
  router.get('/', usuarios.findAll)

  app.use('/api/usuarios', router)
}
