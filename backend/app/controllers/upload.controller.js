const fs = require('fs')
const db = require('../models')
const Archivo = db.archivo

const uploadFiles = async (req, res) => {
  try {
    console.log(req.file)
    if (req.file == undefined) {
      return res.send('Tu debes seleccionar un archivo')
    }
    Archivo.create({
      type: req.file.mimetype,
      nombre: req.file.originalname,
      data: fs.readFileSync(__basedir + '/resources/static/assets/uploads/' + req.file.filename),
    }).then((file) => {
      fs.writeFileSync(__basedir + '/resources/static/assets/tmp/' + file.name, file.data)
      return res.send('El archivo se cargado correctamente')
    })
  } catch (error) {
    console.log(error)
    return res.send(`Error cuando se trato de argar el archivo: ${error}`)
  }
}

module.exports = {
  uploadFiles
}
