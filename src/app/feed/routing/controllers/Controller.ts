import { Store } from 'vuex'
import store from '../../store'
import { State } from '../../store/types/State'

export abstract class Controller {

  /**
   * The vuex store.
   */
  protected $store: Store<State> = store

}
