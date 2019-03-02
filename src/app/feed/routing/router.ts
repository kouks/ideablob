import Vue from 'vue'
import { Request } from './types/Request'
import { Pipeline } from '@exteranto/core'
import VueRouter, { Route } from 'vue-router'
import { Middleware } from './middleware/Middleware'
import { Controller } from './controllers/Controller'

import { HomeController } from './controllers/HomeController'

Vue.use(VueRouter)

const router: VueRouter = new VueRouter({

  /**
   * Basic Vue Router options.
   */

  linkActiveClass: 'is-active',

  /*
   * Component routes.
   */

  routes: [
    {
      component: () => import('../views/Home.vue'),
      meta: {
        controller: [HomeController, 'home'],
      },
      name: 'home',
      path: '/',
    },
  ],

})

router.beforeEach((to: Route, from: Route, next: any) : void => {
  const controller: Controller = to.meta.controller
  const middleware: Middleware[] = to.meta.middleware || []
  const request: Request = { to, from }

  new Pipeline()
    .send(request)
    .via('handle')
    .through(middleware)
    .then(result => controller ? Promise.resolve(result) : Promise.reject())
    .then(result => new controller[0]()[controller[1]](result))
    .then(next, next)
})

export default router
