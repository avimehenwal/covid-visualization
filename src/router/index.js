import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Lazy loading routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/summary',
    name: 'Summary',
    component: () => import(/* webpackChunkName: "about" */ '../views/Summary.vue')
  },
  {
    path: '/country',
    name: 'Country',
    component: () => import(/* webpackChunkName: "about" */ '../views/Country.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
