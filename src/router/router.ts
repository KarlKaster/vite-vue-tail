import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'about', path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // always scroll to top
  scrollBehavior() {
    // always scroll to top
    return { top: 0, behavior: 'smooth' };
  },
});

export default router;
