const db = require('../models')
const Presupuesto = db.presupuesto
const Op = db.Sequelize.Op

// Creando una partida al presupuesto
exports.create = (req, res) => {
  const presupuesto = {
    year: req.body.year,
    rm: req.body.rm,
    ur: req.body.ur,
    up: req.body.up,
    rubro: req.body.rubro,
    tg: req.body.tg,
    ogasto: req.body.ogasto,
    f: req.body.f,
    fu: req.body.fu,
    sf: req.body.sf,
    eje: req.body.eje,
    s: req.body.s,
    prog: req.body.prog,
    sp: req.body.sp,
    obj: req.body.obj,
    proy: req.body.proy,
    est: req.body.est,
    obra: req.body.obra,
    ben: req.body.ben,
    eg: req.body.eg,
    mi: req.body.mi,
    pr: req.body.pr,
    pd: req.body.pd,
    itrans: req.body.itrans,
    min: req.body.min,
    igest: req.body.igest,
    la: req.body.la,
    ods: req.body.ods,
    et: req.body.et,
    ff: req.body.ff,
    of: req.body.of,
    np: req.body.np,
    cpa: req.body.cpa,
    nombreP: req.body.nombreP
  }
}
