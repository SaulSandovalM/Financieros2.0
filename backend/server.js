// importaciones
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

var corsOptions = {
  origin: 'http://localhost:8081'
}

app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

const db = require('./app/models')

// Para desarrollo
// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and re-sync db.')
// })

db.sequelize.sync()

app.get('/', (req, res) => {
  res.json({ message: 'Funciona' })
})

require('./app/routes/tutorial.routes')(app)

// establecemos nuestro puerto
const PORT = process.env.PORT || 8080

// iniciamos nuestro servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}.`)
})
