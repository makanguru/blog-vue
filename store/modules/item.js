import ItemApi from '@/api/item'

const state = {
  data: null,
  isLoading: false,
  error: null
}

export const mutationTypes = {
  getItemStart: '[Item] Get item start',
  getItemSuccess: '[Item] Get item success',
  getItemFailure: '[Item] Get item failure',

  deleteItemStart: '[Item] Delete item start',
  deleteItemSuccess: '[Item] Delete item success',
  deleteItemFailure: '[Item] Delete item failure'
}

export const actionTypes = {
  getItem: '[Item] Get item',
  deleteItem: '[Item] Delete item'
}

const mutations = {
  [mutationTypes.getItemStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationTypes.getItemSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationTypes.getItemFailure](state) {
    state.isLoading = false
  },
  [mutationTypes.deleteItemStart]() {},
  [mutationTypes.deleteItemSuccess]() {},
  [mutationTypes.deleteItemFailure]() {}
}

const actions = {
  [actionTypes.getItem](context, {slug}) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getItemStart)
      ItemApi
        .getItem(slug)
        .then(item => {
          context.commit(mutationTypes.getItemSuccess, item)
          resolve(Item)
        })
        .catch(() => {
          context.commit(mutationTypes.getItemFailure)
        })
    })
  },
  [actionTypes.deleteItem](context, {slug}) {
    return new Promise(resolve => {
      context.commit(mutationTypes.deleteItemStart)
      ItemApi
        .deleteItem(slug)
        .then(() => {
          context.commit(mutationTypes.deleteItemSuccess)
          resolve()
        })
        .catch(() => {
          context.commit(mutationTypes.deleteItemFailure)
        })
    })
  }
}

export default {
  state,
  actions,
  mutations
}
