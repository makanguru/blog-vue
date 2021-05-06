import axios from '@/api/axios'

const getUrl = slug => `/items/${slug}/nice`

const supNice = slug => {
  const url = getUrl(slug)
  return axios.post(url, {}).then(response => response.data.item)
}

const delNice = slug => {
  const url = getUrl(slug)
  return axios.delete(url).then(response => response.data.item)
}

export default {
  supNice,
  delNice
}
