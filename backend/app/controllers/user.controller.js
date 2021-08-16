exports.allAccess = (req, res) => {
  res.status(200).send('Contenido Publico.')
}

exports.fondoBoard = (req, res) => {
  res.status(200).send('Contenido de Fondo.')
}

exports.tesoreriaBoard = (req, res) => {
  res.status(200).send('Contenido de Tesoreria.')
}

exports.presupuestoBoard = (req, res) => {
  res.status(200).send('Contenido de Presupuesto.')
}

exports.validacionBoard = (req, res) => {
  res.status(200).send('Contenido de Validacion.')
}

exports.adminBoard = (req, res) => {
  res.status(200).send('Contenido de Administrador.')
}
