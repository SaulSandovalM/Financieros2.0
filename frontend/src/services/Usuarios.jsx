import http from '../http-common'

class UsuariosDataService {
  getAll () {
    return http.get('/usuarios')
  }

  get (id) {
    return http.get(`/usuarios/${id}`)
  }

  create (data) {
    return http.post('/usuarios', data)
  }
}

export default new UsuariosDataService()
