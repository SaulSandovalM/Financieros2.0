import http from '../http-common'

class MovementsDataService {
  create (data) {
    return http.post('/movements', data)
  }
}

export default new MovementsDataService()
