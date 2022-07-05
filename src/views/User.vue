<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useUserStore } from '../store/user';

const route = useRoute();

const userStore = useUserStore();

const user = userStore.user[0];
</script>

<template>
    <div>
        User {{ route.params.username }}
        <ul>
            <li class="p-2 rounded-full border">
                <router-link :to="{ path: `/users/${user.name.first}/posts` }"
                    >Go to my posts</router-link
                >
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
