import popularDrovesApi from '@/api/popularDroves'

const state = {
  data: null,
  isLoading: false,
  error: null
}

export const mutationTypes = {
  getPopularDrovesStart: '[popularDroves] Get popular droves start',
  getPopularDrovesSuccess: '[popularDroves] Get popular droves success',
  getPopularDrovesFailure: '[popularDroves] Get popular droves failure'
}

export const actionTypes = {
  getPopularDroves: '[popularDroves] Get popular droves'
}

const mutations = {
  [mutationTypes.getPopularDrovesStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationTypes.getPopularDrovesSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationTypes.getPopularDrovesFailure](state) {
    state.isLoading = false
  }
}

const actions = {
  [actionTypes.getPopularDroves](context) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getPopularDrovesStart)
      popularDrovesApi
        .getPopularDroves()
        .then(droves => {
          context.commit(mutationTypes.getPopularDrovesSuccess, droves)
          resolve(droves)
        })
        .catch(() => {
          context.commit(mutationTypes.getPopularDrovesFailure)
        })
    })
  }
}

export default {
  state,
  actions,
  mutations
}
