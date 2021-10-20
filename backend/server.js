// importaciones
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

var corsOptions = {
  origin: 'http://localhost:8081'
}

app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-typw - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// database
const db = require('./app/models')
const Role = db.role

// Para desarrollo
// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and re-sync Database with { force: true }')
//   initial()
// })
// db.sequelize.sync()

app.get('/', (req, res) => {
  res.json({ message: 'Funciona' })
})

// routes
require('./app/routes/user.routes')(app)
require('./app/routes/auth.routes')(app)
require('./app/routes/presupuesto.routes')(app)

// establecemos nuestro puerto
const PORT = process.env.PORT || 8080

// iniciamos nuestro servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}.`)
})

function initial () {
  Role.create({
    id: 1,
    name: 'fondos'
  })

  Role.create({
    id: 2,
    name: 'tesoreria'
  })

  Role.create({
    id: 3,
    name: 'presupuesto'
  })

  Role.create({
    id: 4,
    name: 'validacion'
  })

  Role.create({
    id: 5,
    name: 'admin'
  })
}
