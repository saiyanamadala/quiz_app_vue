import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue';
import HomeView from '@/views/HomeView.vue';

import { useUserStore } from '@/stores/user';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta: { requiresAuth: false },
      beforeEnter: (to, from, next) => {
        if (useUserStore().isAuthenticated) {
          next('/');
        }
        else {
          next();
        }
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/SignupView.vue'),
      meta: { requiresAuth: false },
      beforeEnter: (to, from, next) => {
        if (useUserStore().isAuthenticated) {
          next('/');
        }
        else {
          next();
        }
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router
