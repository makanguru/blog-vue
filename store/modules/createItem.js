import ItemApi from '@/api/Item'

const state = {
  isSubmitting: false,
  validationErrors: null
}

export const mutationTypes = {
  createItemStart: '[createItem] Create Item start',
  createItemSuccess: '[createItem] Create Item success',
  createItemFailure: '[createItem] Create Item failure'
}

export const actionTypes = {
  createItem: '[createItem] Create Item'
}

const mutations = {
  [mutationTypes.createItemStart](state) {
    state.isSubmitting = true
  },
  [mutationTypes.createItemSuccess](state) {
    state.isSubmitting = false
  },
  [mutationTypes.createItemFailure](state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  }
}

const actions = {
  [actionTypes.createItem](context, {ItemInput}) {
    return new Promise(resolve => {
      context.commit(mutationTypes.createItemStart)
      ItemApi
        .createItem(ItemInput)
        .then(Item => {
          context.commit(mutationTypes.createItemSuccess, Item)
          resolve(Item)
        })
        .catch(result => {
          context.commit(
            mutationTypes.createItemFailure,
            result.response.data.errors
          )
        })
    })
  }
}

export default {
  state,
  actions,
  mutations
}
