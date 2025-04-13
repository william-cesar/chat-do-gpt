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
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/AppAdmin.vue')
    },
    {
      path: '/winner',
      name: 'winner',
      component: () => import('@/views/AppWinner.vue'),
      beforeEnter: (to, from, next) => {
        const isWinner = window.sessionStorage.getItem('isWinner')

        if (!isWinner) {
          return next({ name: 'gameOver' })
        }

        next()
      }
    },
    {
      path: '/game-over',
      name: 'gameOver',
      component: () => import('@/views/AppGameOver.vue'),
      beforeEnter: (to, from, next) => {
        const isWinner = window.sessionStorage.getItem('isWinner')

        if (isWinner) {
          return next({ name: 'winner' })
        }

        next()
      }
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: () => import('@/views/AppNotFound.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const chatUser = window.sessionStorage.getItem('chatUser')

  if (to.name === 'admin') {
    return next()
  }

  if (to.name !== 'home' && !chatUser) {
    return next({ name: 'home' })
  }

  if (to.name === 'home' && chatUser) {
    return next({ name: 'chat' })
  }

  next()
})

export default router
