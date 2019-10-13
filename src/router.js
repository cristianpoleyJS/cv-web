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
      path: '/technologies',
      name: 'Technologies',
      component: () => import(/* webpackChunkName: "technologies" */ './views/Technologies.vue'),
      meta: {
        title: 'CV Cristian Poley - Technologies'
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
