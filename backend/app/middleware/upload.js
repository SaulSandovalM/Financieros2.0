const multer = require('multer')

const archivoFilter = (req, file, cb) => {
  console.log('Upload mid' + file)
  if (file.mimetype.startsWith('archivo')) {
    cb(null, true)
  } else {
    cb('Por favor, sube puros pdf', false)
  }
}

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + '/resources/static/assets/uploads/')
  },
  filename: (req, file, cd) => {
    cb(null, `${Data.now()}-financieros-${file.originalname}`)
  }
})

var upload = multer({ storage: storage, fileFilter: archivoFilter })
module.exports = upload
