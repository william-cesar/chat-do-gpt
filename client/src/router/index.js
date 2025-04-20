import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '@/views/AppHome.vue'
import AppAdmin from '@/views/AppAdmin.vue'
import AppNotFound from '@/views/AppNotFound.vue'

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
      component: AppAdmin
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
      component: AppNotFound
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
