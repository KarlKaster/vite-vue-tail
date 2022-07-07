<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function goBack() {
    router.push('/');
}
</script>

<template>
    <button class="p-2 rounded-full border" @click="goBack">Go back</button>
    <div>About page</div>
</template>
