import axios from 'axios'
import {getItem} from '@/helpers/persistanceStorage'

axios.defaults.baseURL = 'https://kadegen.uk'

axios.interceptors.request.use(config => {
  const token = getItem('accessToken')
  const authorizisationToken = token ? `Token ${token}` : ''
  config.headers.Authorization = authorizisationToken
  return config
})

export default axios
