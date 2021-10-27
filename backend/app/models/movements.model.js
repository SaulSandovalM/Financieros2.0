module.exports = (sequelize, Sequelize) => {
  const Movements = sequelize.define('movements', {
    up: {
      type: Sequelize.STRING
    },
    ogasto: {
      type: Sequelize.STRING
    },
    rubro: {
      type: Sequelize.STRING
    },
    mount: {
      type: Sequelize.STRING
    },
    amount: {
      type: Sequelize.FLOAT
    },
    oficio: {
      type: Sequelize.STRING
    } 
  })
  return Movements
}
