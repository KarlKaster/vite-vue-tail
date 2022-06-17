import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import './index.css';
import router from './router/router';
import i18n from './i18n';
import ProgressBar from './utilities/progress-bar';
import 'nprogress/nprogress.css';

ProgressBar(router);

const pinia = createPinia();
const app = createApp(App);

app.use(i18n);
app.use(router);
app.use(pinia);
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios); // provide 'axios'

app.mount('#app');
