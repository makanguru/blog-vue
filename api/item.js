import axios from '@/api/axios'

const getItem = slug => {
  return axios.get(`/items/${slug}`).then(response => response.data.item)
}

const createItem = itemInput => {
  return axios
    .post('/items', {item: itemInput})
    .then(response => response.data.item)
}

const updateItem = (slug, itemInput) => {
  return axios
    .put(`/items/${slug}`, {item: itemInput})
    .then(response => response.data.item)
}

const deleteItem = slug => {
  return axios.delete(`/items/${slug}`)
}

export default {
  getItem,
  deleteItem,
  createItem,
  updateItem
}
