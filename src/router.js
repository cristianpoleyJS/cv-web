import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MoreMe from './views/MoreMe.vue'
import Experience from './views/Experience.vue'
import Technologies from './views/Technologies.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'CV Cristian Poley - Home'
      }
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience,
      meta: {
        title: 'CV Cristian Poley - Experience'
      }
    },
    {
      path: '/more-me',
      name: 'MoreMe',
      component: MoreMe,
      meta: {
        title: 'CV Cristian Poley - More Me'
      }
    },
    {
      path: '/technologies',
      name: 'Technologies',
      component: Technologies,
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
