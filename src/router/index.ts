import { createRouter, createWebHistory } from 'vue-router'
import { start, done } from '@/utils/nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/index.vue'),
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  start()
  next()
})

router.afterEach(() => {
  done()
})

export default router
