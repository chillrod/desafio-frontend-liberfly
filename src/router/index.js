import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../view/Home.vue';
import CartPage from '../view/CartPage.vue';
import ProfilePage from '../view/ProfileSettings.vue';

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
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
