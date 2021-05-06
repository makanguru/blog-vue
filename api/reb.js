import axios from '@/api/axios'

const getReb = apiUrl => {
  return axios.get(apiUrl)
}

export default {
  getReb
}
