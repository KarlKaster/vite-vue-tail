<script setup lang="ts">
import { onBeforeMount, watch } from 'vue';
import axios from 'axios';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useStore } from 'vuex';
import HelloWorld from './components/HelloWorld.vue';
import ThemeToggler from './components/ThemeToggler.vue';
import IncrementVue from './components/Increment.vue';
import Form from './components/Form.vue';
import Iconify from './components/Iconify.vue';
import Internationalization from './components/I18n.vue';

// const store = useStore();

// onBeforeMount(() => {
//     store.dispatch('initTheme');
// });

// watch(
//     () => store.getters.getTheme,
//     (newTheme) => {
//         if (newTheme === 'light') {
//             document.querySelector('html')!.classList.remove('dark');
//         } else {
//             document.querySelector('html')!.classList.add('dark');
//         }
//     }
// );

axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then((res: any) => console.log(res));
</script>

<template>
    <ul class="flex gap-1 justify-center items-center">
        <li class="p-4 rounded-full border">
            <router-link to="/home">Home</router-link>
        </li>
        <li class="p-4 rounded-full border">
            <router-link to="/about">About</router-link>
        </li>
    </ul>

    <router-view />
    <!-- <ThemeToggler class="m-4" /> -->
    <IncrementVue class="m-4" />
    <Form class="m-4" />
    <Iconify class="m-4" />
    <Internationalization class="m-4" />
    <HelloWorld class="m-4" />
</template>

<style>
#app {
    text-align: center;
    margin-top: 60px;
}
</style>
