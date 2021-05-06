import ItemApi from '@/api/Item'

const state = {
  isSubmitting: false,
  validationErrors: null,
  isLoading: false,
  Item: null
}

export const mutationTypes = {
  updateItemStart: '[editItem] Update Item start',
  updateItemSuccess: '[editItem] Update Item success',
  updateItemFailure: '[editItem] Update Item failure',

  getItemStart: '[editItem] Get Item start',
  getItemSuccess: '[editItem] Get Item success',
  getItemFailure: '[editItem] Get Item failure'
}

export const actionTypes = {
  updateItem: '[editItem] Create Item',
  getItem: '[editItem] Get Item'
}

const mutations = {
  [mutationTypes.updateItemStart](state) {
    state.isSubmitting = true
  },
  [mutationTypes.updateItemSuccess](state) {
    state.isSubmitting = false
  },
  [mutationTypes.updateItemFailure](state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },
  [mutationTypes.getItemStart](state) {
    state.isLoading = true
  },
  [mutationTypes.getItemSuccess](state, payload) {
    state.isLoading = false
    state.Item = payload
  },
  [mutationTypes.getItemFailure](state) {
    state.isLoading = false
  }
}

const actions = {
  [actionTypes.updateItem](context, {slug, ItemInput}) {
    return new Promise(resolve => {
      context.commit(mutationTypes.updateItemStart)
      ItemApi
        .updateItem(slug, ItemInput)
        .then(Item => {
          context.commit(mutationTypes.updateItemSuccess, Item)
          resolve(Item)
        })
        .catch(result => {
          context.commit(
            mutationTypes.updateItemFailure,
            result.response.data.errors
          )
        })
    })
  },
  [actionTypes.getItem](context, {slug}) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getItemStart)
      ItemApi
        .getItem(slug)
        .then(Item => {
          context.commit(mutationTypes.getItemSuccess, Item)
          resolve(Item)
        })
        .catch(() => {
          context.commit(mutationTypes.getItemFailure)
        })
    })
  }
}

export default {
  state,
  actions,
  mutations
}
