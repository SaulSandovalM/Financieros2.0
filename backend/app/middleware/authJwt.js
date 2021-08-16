const jwt = require('jsonwebtoken')
const config = require('../config/auth.config.js')
const db = require('../models')
const User = db.user

verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token']
  if (!token) {
    return res.status(403).send({
      message: 'Token no provehido!'
    })
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: 'No autorizado!'
      })
    }
    req.userId = decoded.id
    next()
  })
}

isFondo = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'fondo') {
          next()
          return
        }
      }
      res.status(403).send({
        message: 'Requiere rol de moderador!'
      })
    })
  })
}

isTesoreria = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'tesoreria') {
          next()
          return
        }
      }
      res.status(403).send({
        message: 'Requiere rol de moderador!'
      })
    })
  })
}

isPresupuesto = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'presupuesto') {
          next()
          return
        }
      }
      res.status(403).send({
        message: 'Requiere rol de moderador!'
      })
    })
  })
}

isValidacion = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'validacion') {
          next()
          return
        }
      }
      res.status(403).send({
        message: 'Requiere rol de moderador!'
      })
    })
  })
}

isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'admin') {
          next()
          return
        }
      }
      res.status(403).send({
        message: 'Requiere rol de administrador!'
      })
    })
  })
}

const authJwt = {
  verifyToken: verifyToken,
  isFondo: isFondo,
  isTesoreria: isTesoreria,
  isPresupuesto: isPresupuesto,
  isValidacion: isValidacion,
  isAdmin: isAdmin,
}
module.exports = authJwt
