module.exports = {
  HOST: 'localhost',
  USER: 'saul',
  PASSWORD: 'Y0uH4v3B33nH4ck3d(#)',
  DB: 'financieros',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
