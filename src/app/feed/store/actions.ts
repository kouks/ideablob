import { State } from './types/State'
import { ActionTree, ActionContext } from 'vuex'

export const actions: ActionTree<State, State> = {

  /**
   * @param context The Vuex Store context
   */
  async action ({ commit }: ActionContext<State, State>) : Promise<void> {
    //
  },

}
