import { createRouter,createWebHashHistory } from 'vue-router'
const router = createRouter({
  linkActiveClass: 'active',
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/page1.vue')
    },
    {
      path: '/page2',
      component: () => import('../views/page2.vue')
    },
    {
      path: '/page3',
      component: () => import('../views/page3.vue')
    },
    {
      path: '/page4',
      component: () => import('../views/page4.vue')
    },
  ]
})
export default router