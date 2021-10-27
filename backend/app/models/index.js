const dbConfig = require('../config/db.config.js')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

// Users
db.user = require('./user.model.js')(sequelize, Sequelize)
db.role = require('./role.model.js')(sequelize, Sequelize)
// Presupuesto
db.presupuesto = require('./presupuesto.model.js')(sequelize, Sequelize)
//Movements
db.tipomovimiento = require('./tipoMovimiento.model.js')(sequelize, Sequelize)
db.movements = require('./movements.model.js')(sequelize, Sequelize)

// Relation Role with User
db.role.belongsToMany(db.user, {
  through: 'user_roles',
  foreignKey: 'roleId',
  otherKey: 'userId'
})
db.user.belongsToMany(db.role, {
  through: 'user_roles',
  foreignKey: 'userId',
  otherKey: 'roleId'
})

db.ROLES = ['user', 'admin', 'moderator']

// Relation Movements
db.tipomovimiento.belongsToMany(db.movements, {
  through: 'movements_type',
  foreignKey: 'tipomovimientoId',
  otherKey: 'movementsId'
})
db.movements.belongsToMany(db.tipomovimiento, {
  through: 'movements_type',
  foreignKey: 'movementsId',
  otherKey: 'tipomovimientoId'
})

db.MOVEMENTS = ['Ampliación', 'Reducción', 'Transferencia', 'Revolvente']

module.exports = db
