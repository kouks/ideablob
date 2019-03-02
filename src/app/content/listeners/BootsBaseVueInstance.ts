import Vue from 'vue'
import App from '../App.vue'
import { Listener, Param } from '@exteranto/core'

export class BootsBaseVueInstance implements Listener {

  /**
   * The application name.
   */
  @Param('app.name')
  private name: string

  /**
   * Handle the fired event.
   */
  public handle () : void {
    const component: Vue = new Vue({
      render: h => h(App),
    }).$mount(`#${this.name}`)

    document.body.appendChild(component.$el)
  }

}
