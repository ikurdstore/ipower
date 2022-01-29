import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'سەرەتا',
    component: Home
  },
  {
    path: '/apps',
    name: 'یاری و بەرنامەکان',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Apps.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  document.title = `${ process.env.VUE_APP_TITLE } - ${ to.name }`
  next()
})

export default router
