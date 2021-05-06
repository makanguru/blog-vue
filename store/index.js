import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/store/modules/auth'
import reb from '@/store/modules/reb'
import popularDroves from '@/store/modules/popularDroves'
import Item from '@/store/modules/Item'
import createItem from '@/store/modules/createItem'
import editItem from '@/store/modules/editItem'
import settings from '@/store/modules/settings'
import supNice from '@/store/modules/supNice'
import userProfile from '@/store/modules/userProfile'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    reb,
    populardove,
    item,
    createItem,
    editItem,
    settings,
    supNice,
    userProfile
  }
})
