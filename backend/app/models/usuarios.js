module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define('usuario', {
    nombre: {
      type: Sequelize.STRING
    },
    constraseña: {
      type: Sequelize.STRING
    }
  })
  return Usuario
}
