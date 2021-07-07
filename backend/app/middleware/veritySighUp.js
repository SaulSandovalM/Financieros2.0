const db = require('../models')
const ROLES = db.ROLES
const User = db.user

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: 'Error! Este nombre ya esta en uso'
      })
      return
    }

    // email
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: 'Error! Este correo ya esta en uso'
        })
        return
      }
      next()
    })
  })
}

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length: i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: 'Error! Ese rol no existe = ' + req.body.roles[i]
        })
        return
      }
    }
  }
  next()
}

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted
}
