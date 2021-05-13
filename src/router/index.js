import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../view/Home.vue';
import CartPage from '../view/CartPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cartpage',
    name: 'CartPage',
    component: CartPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
