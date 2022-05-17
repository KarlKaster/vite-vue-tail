<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
    count: 0,
});

function increment() {
    state.count += 1;
}
</script>

<template>
    <div>
        <button class="p-2 rounded-full border" @click="increment">
            Increment number
        </button>
        <p>{{ state.count }}</p>
    </div>
</template>
