<script lang="ts" setup>
import { reactive, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../store/counter';
// local state implementation
const state = reactive({
    count: 0,
});
function increment() {
    state.count += 1;
}
// global state implementation with pinia
const counterStore = useCounterStore();
const { counter } = storeToRefs(counterStore);
const { incrementBy } = counterStore;

// persist state with pinia and retrieve it on reload
if (localStorage.getItem('counter')) {
    const counterValue = localStorage.getItem('counter');
    if (counterValue != null) {
        counter.value = JSON.parse(counterValue);
    }
}
watch(
    counter,
    (counterValue) => {
        localStorage.setItem('counter', JSON.stringify(counterValue));
    },
    { deep: true }
);
</script>

<template>
    <div>
        <button class="p-2 rounded-full border" @click="increment">
            Increment local state number
        </button>
        <button class="p-2 rounded-full border" @click="incrementBy(1)">
            Increment Pinia state {{ counter }}
        </button>
        <button class="p-2 rounded-full border" @click="counterStore.$reset()">
            reset Pinia State
        </button>
        <p>{{ state.count }} Local State</p>
        <p>{{ counter }} Pinia State</p>
    </div>
</template>
