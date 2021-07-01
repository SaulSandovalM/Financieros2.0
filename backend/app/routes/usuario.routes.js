module.exports = app => {
  const usuarios = require('../controllers/usuario.controller.js')

  var router = require('express').Router()

  // Crear un nuevo Usuario
  router.post('/', usuarios.create)

  app.use('/api/usuarios', router)
}
