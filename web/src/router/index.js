import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '@/views/AppHome.vue'
import AppNotFound from '@/views/AppNotFound.vue'

const router = createRouter({
  history: createWebHistory('/'),
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
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: AppNotFound
    }
  ]
})

router.beforeEach((to, _, next) => {
  const chatUser = window.sessionStorage.getItem('chatUser')

  if (to.name == 'chat' && !chatUser) {
    return next({ name: 'home' })
  }

  next()
})

export default router
