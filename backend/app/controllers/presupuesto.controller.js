const db = require('../models')
const Presupuesto = db.presupuesto
const Op = db.Sequelize.Op

// Create 
exports.create = (req, res) => {
  // Validating
  if (
    !req.body.year ||
    !req.body.rm ||
    !req.body.ur ||
    !req.body.up ||
    !req.body.rubro ||
    !req.body.tg ||
    !req.body.ogasto ||
    !req.body.f ||
    !req.body.fu ||
    !req.body.sf ||
    !req.body.eje ||
    !req.body.s ||
    !req.body.prog ||
    !req.body.sp ||
    !req.body.obj ||
    !req.body.proy ||
    !req.body.est ||
    !req.body.obra ||
    !req.body.ben ||
    !req.body.eg ||
    !req.body.mi ||
    !req.body.pr ||
    !req.body.pd ||
    !req.body.itrans ||
    !req.body.min ||
    !req.body.igest ||
    !req.body.la ||
    !req.body.ods ||
    !req.body.et ||
    !req.body.ff ||
    !req.body.of ||
    !req.body.np ||
    !req.body.cpa ||
    !req.body.nombreP ||
    !req.body.oficio
  ) {
    return res.status(400).send({ message: 'Faltan campos!' })
  }

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
    nombreP: req.body.nombreP,
    oficio: req.body.oficio,
    enero: req.body.enero,
    febrero: req.body.febrero,
    marzo: req.body.marzo,
    abril: req.body.abril,
    mayo: req.body.mayo,
    junio: req.body.junio,
    julio: req.body.julio,
    agosto: req.body.agosto,
    septiembre: req.body.septiembre,
    octubre: req.body.octubre,
    noviembre: req.body.noviembre,
    diciembre: req.body.diciembre
  }

  Presupuesto.create(presupuesto).then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: 
        err.message || 'Algo ocurrio mientras se cargaba el presupuesto.'
    })
  })
}

// Get all data from database
exports.getAll = (req, res) => {
  Presupuesto.findAll().then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Algo ocurrio mientras se cargaba el presupuesto'
    })
  })
}

// Update
exports.update = (req, res) => {
  const id = req.params.id

  Presupuesto.update(req.body, { where: { id: id } }).then(num => {
    if (num == 1) {
      res.send({
        message: 'El presupuesto ha sido actualizado exitosamente.'
      })
    } else {
      res.send({
        message: `No se actualizo el presupuesto con id = ${id}. Quiza el req.body esta vacio!`
      })
    }
  }).catch(err => {
    res.status(500).send({
      message: 'Error al actualizar el id = ' + id
    })
  })
}

// Find by id
exports.findOne = (req, res) => {
  const id = req.params.id
  Presupuesto.findByPk(id).then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: 'Error al traer la partida con id = ' + id
    })
  })
}

// Group By
exports.upAll = (req, res) => {
  Presupuesto.findAll({ attributes: ['up'], group: 'up' }).then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Algo salio mal'
    })
  })
}

exports.ogastoAll = (req, res) => {
  const up = req.body.up
  Presupuesto.findAll({ where: { up: up }, attributes: ['ogasto'], group: 'ogasto' }).then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Algo salio mal'
    })
  })
}

exports.rubroAll = (req, res) => {
  const ogasto = req.body.ogasto
  console.log(ogasto)
  Presupuesto.findAll({ where: { ogasto: ogasto } }).then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Algo salio mal'
    })
  })
}
