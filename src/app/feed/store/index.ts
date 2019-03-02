import Vue from 'vue'
import Vuex from 'vuex'
import { State } from './types/State'

import { state } from './state'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'

Vue.use(Vuex)

export default new Vuex.Store<State>({
  actions,
  getters,
  mutations,
  state,
})
