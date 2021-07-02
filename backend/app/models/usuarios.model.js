module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define('usuario', {
    nombre: {
      type: Sequelize.STRING
    },
    contraseña: {
      type: Sequelize.STRING
    }
  })
  return Usuario
}
