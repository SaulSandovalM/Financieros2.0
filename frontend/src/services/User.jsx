import axios from 'axios'
import AuthHeader from './AuthHeader'

const API_URL = 'http://localhost:8080/api/test/'

class UserService {
  getPublicContent () {
    return axios.get(API_URL + 'all')
  }

  getFondoBoard () {
    return axios.get(API_URL + 'fondo', { headers: AuthHeader() })
  }

  getTesoreriaBoard () {
    return axios.get(API_URL + 'tesoreria', { headers: AuthHeader() })
  }

  getPresupuestoBoard () {
    return axios.get(API_URL + 'presupuesto', { headers: AuthHeader() })
  }

  getValidacionBoard () {
    return axios.get(API_URL + 'validacion', { headers: AuthHeader() })
  }

  getAdminBoard () {
    return axios.get(API_URL + 'admin', { headers: AuthHeader() })
  }
}

export default new UserService()
