import axios from 'axios'
import { get } from 'lodash'

const axiosConfig = {
  headers: {
    'Context-type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 60000,
  withCredential: true,
  baseURL: 'http://localhost:3000/',
}
const axiosClient = axios.create(axiosConfig)
//  Request interceptor
axiosClient.interceptors.request.use(
  async (config) => {
    if (!get(config, 'beforeSecure')) {
      config.headers = {
        clientId: '',
      }
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

// Response interceptor

export const responseInterceptor = response => response

export const responseInterceptorError = (error) => {
  if (error.response.status === 403 || error.response.status === 409) {
    // Do Something
  }
  return Promise.reject(error)
}

axios.interceptors.response.use(responseInterceptor, responseInterceptorError)

export default axiosClient
