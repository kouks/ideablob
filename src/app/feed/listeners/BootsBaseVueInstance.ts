import Vue from 'vue'
import App from '../App.vue'
import store from '../store'
import router from '../routing/router'
import { Listener } from '@exteranto/core'

export class BootsBaseVueInstance implements Listener {

  /**
   * Handle the fired event.
   */
  public handle () : void {
    new Vue({
      render: h => h(App),
      router,
      store,
    }).$mount(`#app`)
  }

}
