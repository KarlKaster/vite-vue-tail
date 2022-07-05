import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import User from '../views/User.vue';
import UserPosts from '../views/UserPosts.vue';
import UserProfile from '../views/UserProfile.vue';
import UserHome from '../views/UserHome.vue';

const routes = [
    {
        name: 'users',
        path: '/users/:username',
        component: User,
        children: [
            { path: '', component: UserHome },
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: 'profile',
                component: UserProfile,
            },
            {
                // UserPosts will be rendered inside User's <router-view>
                // when /user/:id/posts is matched
                path: 'posts',
                component: UserPosts,
            },
        ],
    },
    { name: 'home', path: '/home', component: Home },
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
