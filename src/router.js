import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
      meta: {
        title: 'CV Cristian Poley - Home'
      }
    },
    {
      path: '/experience',
      name: 'Experience',
      component: () => import(/* webpackChunkName: "experience" */ './views/Experience.vue'),
      meta: {
        title: 'CV Cristian Poley - Experience'
      }
    },
    {
      path: '/more-me',
      name: 'MoreMe',
      component: () => import(/* webpackChunkName: "moreme" */ './views/MoreMe.vue'),
      meta: {
        title: 'CV Cristian Poley - More Me'
      }
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import(/* webpackChunkName: "portfolio" */ './views/Portfolio.vue'),
      meta: {
        title: 'CV Cristian Poley - Portfolio'
      }
    },
    {
      path: '*',
      redirect: {
        name: 'Home'
      }
    }
  ]
})
