const db = require('../models')
const Tutorial = db.tutorials
const Op = db.Sequelize.Op

exports.create = (req, res) => {
  // Validando
  if (!req.body.title) {
    res.status(400).send({
      message: 'Content can not be empty!'
    })
    return
  }

  // Creacion
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  }

  // Save Tutorial in the database
  Tutorial.create(tutorial)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Tutorial.'
      })
    })
}

exports.findAll = (req, res) => {
  const title = req.query.title
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null

  Tutorial.findAll({ where: condition }).then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Some error'
    })
  })
}

exports.findOne = (req, res) => {
  const id = req.params.id

  Tutorial.findByPk(id).then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Error id ' + id
    })
  })
}

exports.update = (req, res) => {
  const id = req.params.id

  Tutorial.update(req.body, { where: { id: id } }).then(num => {
    if (num === 1) {
      res.send({
        message: 'Tutorial actualizado'
      })
    }
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Error update ' + id
    })
  })
}

exports.delete = (req, res) => {
  const id = req.params.id

  Tutorial.destroy({ where: { id: id } }).then(num => {
    if (num === 1) {
      res.send({
        message: 'Tutotrial dorrado'
      })
    } else {
      res.send({
        message: 'No se puede borrar'
      })
    }
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'No se puede borrar'
    })
  })
}

exports.deleteAll = (req, res) => {
  Tutorial.destroy({ where: {}, truncate: false }).then(nums => {
    res.send({ message: `${nums} tutorials borrados` })
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Error'
    })
  })
}

exports.findAllPublished = (req, res) => {
  Tutorial.findAll({ where: { published: true } }).then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Algo salio mal'
    })
  })
}
