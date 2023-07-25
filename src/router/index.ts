import { createRouter, createWebHistory } from 'vue-router'
import TheMain from "@/components/TheMain.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheMain
    },
  ]
})

export default router
