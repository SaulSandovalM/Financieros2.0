module.exports = app => {
  const archivo = require('..controllers/upload.controller')

  var router = require('express').Router()

  router.get('/', archivo.findAll)

  router.post('/', archivo.uploadFiles)

  app.use('/api/archivo', router)
}
