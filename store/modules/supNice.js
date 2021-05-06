import supNiceApi from '@/api/supNice'

export const actionTypes = {
  supNice: '[supNice] Sup to nice'
}

export const mutationTypes = {
  supNiceStart: '[supNice] Sup to nice start',
  supNiceSuccess: '[supNice] Sup to nice success',
  supNiceFailure: '[supNice] Sup to nice failure'
}

const mutations = {
  [mutationTypes.supNiceStart]() {},
  [mutationTypes.supNiceSuccess]() {},
  [mutationTypes.supNiceFailure]() {}
}

const actions = {
  [actionTypes.supNice](context, {slug, isNiced}) {
    return new Promise(resolve => {
      context.commit(mutationTypes.supNiceStart)
      const promise = isNiced
        ? supNiceApi.removeFromnice(slug)
        : supNiceApi.supNice(slug)
      promise
        .then(item => {
          context.commit(mutationTypes.supNiceSuccess, item)
          resolve(item)
        })
        .catch(() => {
          context.commit(mutationTypes.supNiceFailure())
        })
    })
  }
}

export default {
  actions,
  mutations
}
