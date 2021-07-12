exports.allAccess = (req, res) => {
  res.status(200).send('Contenido Publico.')
}

exports.userBoard = (req, res) => {
  res.status(200).send('Contenido de Usuario.')
}

exports.adminBoard = (req, res) => {
  res.status(200).send('Contenido de Administrador.')
}

exports.moderatorBoard = (req, res) => {
  res.status(200).send('Contenido de Moderador.')
}
