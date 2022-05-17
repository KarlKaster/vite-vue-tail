<script setup lang="ts">
import { useStore } from 'vuex';

const store = useStore();

function toggleTheme() {
    store.dispatch('toggleTheme');
}
</script>

<template>
    <button class="text-cyan-200 dark:text-red-400" @click="toggleTheme">
        Theme Toggle
    </button>
</template>
