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
const { counter, doubleCount, doublePlusOne } = storeToRefs(counterStore);
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

// debugging actions
counterStore.$onAction(
    ({
        name, // name of the action
        args, // array of parameters passed to the action
        after, // hook after the action returns or resolves
        onError, // hook if the action throws or rejects
    }) => {
        // a shared variable for this specific action call
        const startTime = Date.now();
        // this will trigger before an action on `store` is executed
        console.log(`Start "${name}" with params [${args.join(', ')}].`);

        // this will trigger if the action succeeds and after it has fully run.
        // it waits for any returned promised
        after((result) => {
            console.log(
                `Finished "${name}" after ${
                    Date.now() - startTime
                }ms.\nResult: ${result}.`
            );
        });

        // this will trigger if the action throws or returns a promise that rejects
        onError((error) => {
            console.warn(
                `Failed "${name}" after ${
                    Date.now() - startTime
                }ms.\nError: ${error}.`
            );
        });
    }
);
</script>

<template>
    <div>
        <button class="p-2 rounded-full border" @click="increment">
            Increment local state number
        </button>
        <button class="p-2 rounded-full border" @click="incrementBy(1)">
            Increment Pinia state
        </button>
        <button class="p-2 rounded-full border" @click="counterStore.$reset()">
            reset Pinia State
        </button>
        <p>{{ state.count }} Local State</p>
        <p>{{ counter }} Pinia State</p>
        <p>{{ doubleCount }} Pinia Getter Counter * 2</p>
        <p>{{ doublePlusOne }} Pinia Getter Counter * 2 + 1</p>
    </div>
</template>
