const db = require('../models')
const Usuario = db.usuarios
const Op = db.Sequelize.Op

exports.create = (req, res) => {
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

exports.findAll = (req, res) => {
  const nombre = req.query.nombre
  var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null

  Usuario.findAll({ where: condition }).then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Some error'
    })
  })
}
