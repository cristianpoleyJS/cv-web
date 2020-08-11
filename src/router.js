import Home from './views/Home.vue'
import MoreMe from './views/MoreMe.vue'
import Experience from './views/Experience.vue'
import Technologies from './views/Technologies.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  redirect: '/',
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
    }
  ]
})

export default router
