<script setup lang="ts">
import { Field, Form, ErrorMessage } from 'vee-validate';
import { reactive } from 'vue';
import * as yup from 'yup';
import axios from 'axios';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';

const state = reactive({
    count: 0,
    passwordRules: yup.string().required().min(8),
});

function increment() {
    state.count += 1;
}

axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then((res: any) => console.log(res));
</script>

<template>
    <button @click="increment">
        {{ state.count }}
    </button>
    <router-view />
    <div class="text-xl text-green-800">Hello World</div>

    <img alt="Vue logo" src="./assets/logo.png" class="m-auto" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />

    <Form>
        <div>
            <label for="password">Password</label>
        </div>
        <Field
            name="password"
            type="password"
            placeholder="Enter password..."
            class="border"
            :rules="state.passwordRules"
        />
        <ErrorMessage name="password" />
    </Form>
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
