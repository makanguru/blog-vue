import rebApi from '@/api/reb'

const state = {
  data: null,
  isLoading: false,
  error: null
}

export const mutationTypes = {
  getRebStart: '[reb] Get reb start',
  getRebSuccess: '[reb] Get reb success',
  getRebFailure: '[reb] Get reb failure'
}

export const actionTypes = {
  getReb: '[reb] Get reb'
}

const mutations = {
  [mutationTypes.getRebStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationTypes.getRebSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationTypes.getRebFailure](state) {
    state.isLoading = false
  }
}

const actions = {
  [actionTypes.getReb](context, {apiUrl}) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getRebStart, apiUrl)
      rebApi
        .getReb(apiUrl)
        .then(response => {
          context.commit(mutationTypes.getRebSuccess, response.data)
          resolve(response.data)
        })
        .catch(() => {
          context.commit(mutationTypes.getRebFailure)
        })
    })
  }
}

export default {
  state,
  actions,
  mutations
}