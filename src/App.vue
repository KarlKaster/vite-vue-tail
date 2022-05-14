<script setup lang="ts">
import { inject } from 'vue'; // inject axios
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';

// How to use axios
const axios: any = inject('axios');
axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then((res: any) => console.log(res));
</script>

<template>
    <router-view />
    <div class="text-xl text-green-800">Hello World</div>

    <img alt="Vue logo" src="./assets/logo.png" class="m-auto" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
}
</style>
