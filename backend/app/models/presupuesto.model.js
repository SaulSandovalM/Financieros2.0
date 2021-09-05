module.exports = (sequelize, Sequelize) => {
  const Presupuesto = sequelize.define('presupuesto', {
    year: {
      type: Sequelize.STRING
    },
    rm: {
      type: Sequelize.STRING
    },
    ur: {
      type: Sequelize.STRING
    },
    up: {
      type: Sequelize.STRING
    },
    rubro: {
      type: Sequelize.STRING
    },
    tg: {
      type: Sequelize.STRING 
    },
    ogasto: {
      type: Sequelize.STRING
    },
    f: {
      type: Sequelize.STRING
    },
    fu: {
      type: Sequelize.STRING
    },
    sf: {
      type: Sequelize.STRING
    },
    eje: {
      type: Sequelize.STRING
    },
    s: {
      type: Sequelize.STRING
    },
    prog: {
      type: Sequelize.STRING
    },
    sp: {
      type: Sequelize.STRING
    },
    obj: {
      type: Sequelize.STRING
    },
    proy: {
      type: Sequelize.STRING
    },
    est: {
      type: Sequelize.STRING
    },
    obra: {
      type: Sequelize.STRING
    },
    ben: {
      type: Sequelize.STRING
    },
    eg: {
      type: Sequelize.STRING
    },
    mi: {
      type: Sequelize.STRING
    },
    pr: {
      type: Sequelize.STRING
    },
    pd: {
      type: Sequelize.STRING
    },
    itrans: {
      type: Sequelize.STRING
    },
    min: {
      type: Sequelize.STRING
    },
    igest: {
      type: Sequelize.STRING
    },
    la: {
      type: Sequelize.STRING
    },
    ods: {
      type: Sequelize.STRING
    },
    et: {
      type: Sequelize.STRING
    },
    ff: {
      type: Sequelize.STRING
    },
    of: {
      type: Sequelize.STRING
    },
    np: {
      type: Sequelize.STRING
    },
    cpa: {
      type: Sequelize.STRING
    },
    nombreP: {
      type: Sequelize.STRING
    },
    enero: {
      type: Sequelize.FLOAT
    },
    febrero: {
      type: Sequelize.FLOAT
    },
    marzo: {
      type: Sequelize.FLOAT
    },
    abril: {
      type: Sequelize.FLOAT
    },
    mayo: {
      type: Sequelize.FLOAT
    },
    junio: {
      type: Sequelize.FLOAT
    },
    julio: {
      type: Sequelize.FLOAT
    },
    agosto: {
      type: Sequelize.FLOAT
    },
    septiembre: {
      type: Sequelize.FLOAT
    },
    octubre: {
      type: Sequelize.FLOAT
    },
    noviembre: {
      type: Sequelize.FLOAT
    },
    diciembre: {
      type: Sequelize.FLOAT
    }
  })
  return Presupuesto
}
