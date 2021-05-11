import { createApp } from 'vue';

import App from './components/app/App.vue';

import router from './router';
import store from './store';

import vuetify from './shared/plugins/vuetify';
import './shared/styles/global.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(vuetify);

app.mount('#app');
