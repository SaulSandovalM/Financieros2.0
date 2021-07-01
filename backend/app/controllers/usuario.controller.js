const db = require('../models')
const Usuario = db.usuarios

exports.create = (req, res) => {
  // Validando
  if (!req.body.nombre) {
    res.status(400).send({
      message: 'Content can not be empty!'
    })
    return
  }

  // Creacion
  const usuario = {
    nombre: req.body.nombre,
    contraseña: req.body.contraseña
  }

  // Save Usuario in the database
  Usuario.create(usuario)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Usuario.'
      })
    })
}
