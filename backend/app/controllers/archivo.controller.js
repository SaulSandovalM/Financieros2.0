const fs = require('fs')
const db = require('../models')
const Archivo = db.archivo

const archivo = async (req, res) => {
  console.log('Entre al controller')
  try {
    console.log(req.archivo)
    if (req.archivo == undefined) {
      return res.send('Tu debes seleccionar un archivo')
      console.log('Tu debes seleccionar un archivo')
    }
    Archivo.create({
      type: req.archivo.mimetype,
      nombre: req.archivo.originalname,
      data: fs.readFileSync(__basedir + '/resources/static/assets/uploads/' + req.archivo.filename),
      oficio: ''
    }).then((archivo) => {
      fs.writeFileSync(__basedir + '/resources/static/assets/tmp/' + archivo.name, archivo.data)
      return res.send('El archivo se cargado correctamente')
    })
  } catch (error) {
    console.log(error)
    return res.send(`Error cuando se trato de cargar el archivo: ${error}`)
  }
}

module.exports = {
  archivo
}
