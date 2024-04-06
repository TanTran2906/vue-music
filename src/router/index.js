import { createRouter, createWebHistory } from 'vue-router'

import Home from "@/views/HomeView.vue";
import About from "@/views/AboutView.vue";
import Manage from '@/views/ManageView.vue';

const routes = [
  {
    name: 'home',
    path: "/",
    component: Home,
  },

  {
    name: 'about',
    path: "/about",
    component: About,
  },
  {
    name: 'manage',
    alias: '/manage',
    path: "/manage-music",
    component: Manage,
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'text-yellow-500'
})

router.beforeEach((to, from, next) => {
  console.log('Global Guard');
  console.log(to, from);

  next()
});

export default router
