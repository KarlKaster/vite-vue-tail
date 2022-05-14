import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import store from './store/store';
import './index.css';
import router from './router/router';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios); // provide 'axios'

app.mount('#app');
