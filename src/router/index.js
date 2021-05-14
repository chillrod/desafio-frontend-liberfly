import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../view/Home.vue';
import CartPage from '../view/CartPage.vue';
import ProfilePage from '../view/ProfileSettings.vue';
import ProductPage from '../view/ProductPage.vue';
import ThankYouPage from '../view/ThankYou.vue';

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
  {
    path: '/product',
    name: 'ProductPage',
    component: ProductPage,
  },
  {
    path: '/thankyou',
    name: 'ThankYou',
    component: ThankYouPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
