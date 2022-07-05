<script setup lang="ts">
import { computed, onBeforeMount, onMounted, watch } from 'vue';
import axios from 'axios';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { storeToRefs } from 'pinia';
import { useThemeStore } from './store/theme';
import HelloWorld from './components/HelloWorld.vue';
import ThemeToggler from './components/ThemeToggler.vue';
import IncrementVue from './components/Increment.vue';
import Form from './components/Form.vue';
import Iconify from './components/Iconify.vue';
import Internationalization from './components/I18n.vue';
import { useUserStore } from './store/user';

console.clear();

const userStore = useUserStore();

onMounted(() => {
    axios
        .get('https://randomuser.me/api/')
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((res: any) => {
            userStore.user = res.data.results;
            console.log(userStore.user);
        });
});

const user = computed(() => userStore.user[0]);

const themeStore = useThemeStore();

const { theme } = storeToRefs(themeStore);

onBeforeMount(() => {
    themeStore.initTheme();
});

watch(
    theme,
    (newTheme) => {
        if (newTheme === 'light') {
            document.querySelector('html')!.classList.remove('dark');
        } else {
            document.querySelector('html')!.classList.add('dark');
        }
    },
    { deep: true }
);
</script>

<template>
    <ul class="flex gap-1 justify-center items-center">
        <li class="p-4 rounded-full border">
            <router-link to="/home">Home</router-link>
        </li>
        <li class="p-4 rounded-full border">
            <router-link to="/about">About</router-link>
        </li>
        <li v-if="user" class="p-4 rounded-full border">
            <router-link
                :to="{
                    name: 'users',
                    params: { username: user.name.first },
                }"
                >/users/{{ user.name.first }}</router-link
            >
        </li>
    </ul>

    <router-view />

    <ThemeToggler class="m-4" />
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
