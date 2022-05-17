<script setup lang="ts">
import { useStore } from 'vuex';

const store = useStore();

function toggleTheme() {
    store.dispatch('toggleTheme');
}
</script>

<template>
    <div>
        <button
            class="p-2 text-cyan-600 dark:text-red-400 rounded-full border"
            @click="toggleTheme"
        >
            Theme Toggle
        </button>
    </div>
</template>
