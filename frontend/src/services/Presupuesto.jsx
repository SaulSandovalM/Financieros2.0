import http from '../http-common'

class PresupuestoDataService {
  create (data) {
    return http.post('/presupuesto', data)
  }
}

export default new PresupuestoDataService()
