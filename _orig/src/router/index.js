import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Lazy loading routes
const routes = [
  {
    path: '/',
    name: 'Home',
    icon: 'mdi-home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/global',
    name: 'Statistics',
    icon: 'mdi-google-analytics',
    component: () => import(/* webpackChunkName: "Global" */ '../views/Global.vue')
  },
  {
    path: '/summary',
    name: 'Data Table',
    icon: 'mdi-table',
    component: () => import(/* webpackChunkName: "Summary" */ '../views/Summary.vue')
  },
  {
    path: '/about',
    name: 'About',
    icon: 'mdi-file-document-outline',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/country',
    name: 'CountryTest',
    icon: 'mdi-test-tube',
    component: () => import(/* webpackChunkName: "Country" */ '../views/Country.vue')
  },
  {
    path: '/country/:name',
    name: 'Country',
    icon: 'mdi-earth',
    component: () => import(/* webpackChunkName: "CountryName" */ '../views/CountryName.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
