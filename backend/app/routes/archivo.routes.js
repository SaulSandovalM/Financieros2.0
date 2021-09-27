module.exports = app => {
  const upload = require('../middleware/upload')
  const archivos = require('../controllers/archivo.controller')

  var router = require('express').Router()

  router.post('/', upload.single('file'), archivos.archivo)

  app.use('/api/archivo', router)
}
