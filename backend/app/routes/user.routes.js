const { authJwt } = require('../middleware')
const controller = require('../controllers/user.controller')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })

  app.get('/api/test/all', controller.allAccess)

  app.get(
    '/api/test/fondo',
    [authJwt.verifyToken, authJwt.isFondo],
    controller.fondoBoard
  )

  app.get(
    '/api/test/tesoreria',
    [authJwt.verifyToken, authJwt.isTesoreria],
    controller.tesoreriaBoard
  )

  app.get(
    '/api/test/presupuesto',
    [authJwt.verifyToken, authJwt.isPresupuesto],
    controller.presupuestoBoard
  )

  app.get(
    '/api/test/validacion',
    [authJwt.verifyToken, authJwt.isValidacion],
    controller.validacionBoard
  )

  app.get(
    '/api/test/admin',
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  )
}
