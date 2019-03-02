import { Route } from 'vue-router'

export interface Request {

  /**
   * The destination route
   */
  to: Route,

  /**
   * The origin route
   */
  from: Route,

}
