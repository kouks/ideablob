import { GetterTree } from 'vuex'
import { State } from './types/State'

export const getters: GetterTree<State, State> = {

  /**
   * @param state The current state
   * @return ...
   */
  getter (state: State) : string {
    return 'works'
  },

}
