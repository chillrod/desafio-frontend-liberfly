import { createApp } from 'vue';

import { MotionPlugin } from '@vueuse/motion';
import Toaster from '@meforma/vue-toaster';
import App from './components/app/App.vue';

import router from './router';
import store from './store';

import vuetify from './shared/plugins/vuetify';
import './shared/styles/global.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Toaster);
app.use(vuetify);
app.use(MotionPlugin);

app.mount('#app');
