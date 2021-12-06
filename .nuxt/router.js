import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1342427e = () => interopDefault(import('../pages/katalog/index.vue' /* webpackChunkName: "pages/katalog/index" */))
const _bc30c52e = () => interopDefault(import('../pages/katalog/_id.vue' /* webpackChunkName: "pages/katalog/_id" */))
const _2e072349 = () => interopDefault(import('../pages/promocja/_id.vue' /* webpackChunkName: "pages/promocja/_id" */))
const _7fe4ea2f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/katalog",
    component: _1342427e,
    name: "katalog"
  }, {
    path: "/katalog/:id",
    component: _bc30c52e,
    name: "katalog-id"
  }, {
    path: "/promocja/:id?",
    component: _2e072349,
    name: "promocja-id"
  }, {
    path: "/",
    component: _7fe4ea2f,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
