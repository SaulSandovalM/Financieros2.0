import http from '../http-common'

class PresupuestoDataService {
  create (data) {
    return http.post('/presupuesto', data)
  }

  getAll () {
    return http.get('/presupuesto')
  }

  update (id, data) {
    return http.put(`/presupuesto/${id}`, data)
  }

  get (id) {
    return http.get(`/presupuesto/${id}`)
  }
}

export default new PresupuestoDataService()
