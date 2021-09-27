import http from '../http-common'

class ArchivosDataService {
  archivo (data) {
    console.log(data)
    return http.post('/archivo', data)
  }
}

export default new ArchivosDataService()
