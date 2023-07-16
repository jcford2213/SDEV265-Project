import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import ('../views/HomeView.vue')
  },
  {
    path: '/:user/dashboard',
    name: 'Dashboard',
    component: () => import ('../views/DashboardView.vue')
  },
  {
    path: '/stocks',
    name: 'Stocks',
    component: () => import ('../views/StocksView.vue')
  },
  {
    path: '/stocks/:ticker',
    name: 'Single Stock',
    component: () => import ('../views/TickerView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import ('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: () => import ('../views/SignUp.vue')
  },
  {
    path: '/forgot-password',
    name: 'Forgot Password',
    component: () => import ('../views/ForgotPassword.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
