<script setup lang="ts">
import { useStore } from 'vuex';

const store = useStore();

function toggleTheme() {
    store.dispatch('toggleTheme');
    console.log(store.getters.getCount);
    store.commit('increment');
    console.log(store.state.count);
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
