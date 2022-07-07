import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import axios from 'axios';
import VueAxios from 'vue-axios';
// @ts-ignore
import veProgress from 'vue-ellipse-progress';
import App from './App.vue';
import './index.css';
import router from './router/router';
import i18n from './i18n';
import ProgressBar from './utilities/progress-bar';
import 'nprogress/nprogress.css';

ProgressBar(router);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);

app.use(i18n);
app.use(router);
app.use(pinia);
app.use(VueAxios, axios);
app.use(veProgress);
app.provide('axios', app.config.globalProperties.axios); // provide 'axios'

app.mount('#app');
