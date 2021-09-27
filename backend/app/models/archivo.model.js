module.exports = (sequelize, DataTypes) => {
  const Archivo = sequelize.define('archivo', {
    type: {
      type: DataTypes.STRING
    },
    nombre: {
      type: DataTypes.STRING
    },
    data: {
      type: DataTypes.BLOB('long')
    },
    oficio: {
      type: DataTypes.STRING
    }
  })
  return Archivo
}
