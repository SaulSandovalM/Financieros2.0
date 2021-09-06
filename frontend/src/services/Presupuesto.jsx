import http from '../http-common'

class PresupuestoDataService {
  create (data) {
    return http.post('/presupuesto', data)
  }

  getAll () {
    return http.get('/presupuesto')
  }
}

export default new PresupuestoDataService()
