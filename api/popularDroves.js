import axios from '@/api/axios'

const getPopularDroves = () => {
  return axios.get('/droves').then(response => response.data.droves)
}

export default {
  getPopularDroves
}
