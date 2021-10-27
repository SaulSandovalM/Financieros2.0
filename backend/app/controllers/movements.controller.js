const db = require('../models') 
const Movement = db.movements
const Type = db.tipomovimiento
const Op = db.Sequelize.Op

exports.create = (req, res) => {
  Movement.create({
    up: req.body.up,
    ogasto: req.body.ogasto,
    rubro: req.body.rubro,
    mount: req.body.mount,
    amount: req.body.amount,
    oficio: req.body.oficio
  }).then(movement => {
    if(req.body.movement) {
      Type.findAll({ where: { name: { [Op.or]: req.body.movement } } }).then(types => {
        movement.setTipomovimientos(types).then(() => {
          res.send({ message: 'Movimiento realizado con exito!' })
        })
      })
    } else {
      movement.setTipomovimientos([4]).then(() => {
        res.send({ message: 'Movimiento realizado con exito!' })
      })
    }
  }).catch(err => {
    res.status(500).send({ message: err.message })
  })
}
