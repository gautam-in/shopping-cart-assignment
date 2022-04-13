import axios from 'axios'
import 'regenerator-runtime/runtime'

class ApiService {
  fetchDeatils = async (url, callback) => {
    try {
      const response = await axios.get(`http://localhost:5001/${url}`)
      callback(response.data)
    } catch (e) {
      callback([])
    }
  }
}

const apiService = new ApiService()

export default apiService
