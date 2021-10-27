module.exports = (sequelize, Sequelize) => {
  const TipoMovimiento = sequelize.define('tipomovimiento', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  })
  return TipoMovimiento
}
