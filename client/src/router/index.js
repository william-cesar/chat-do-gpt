import AppHome from '@/views/AppHome.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('@/views/AppChatView.vue')
    },
    {
      path: '/draw',
      name: 'draw',
      component: () => import('@/views/AppDrawView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const chatUser = window.sessionStorage.getItem('chatUser')

  if (to.name !== 'home' && !chatUser) {
    return next({ name: 'home' })
  }

  if (to.name === 'home' && chatUser) {
    return next({ name: 'chat' })
  }

  next()
})

export default router
