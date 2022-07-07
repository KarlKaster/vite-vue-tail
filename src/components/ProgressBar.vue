<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
    progress: 0,
});
let i = 0;
const options = {
    color: '#7579ff',
    'empty-color': '#324c7e',
    size: 180,
    thickness: 5,
    'empty-thickness': 3,
    'line-mode': 'out 5',
    animation: ' 200 350',
    'font-size': '1.5rem',
};

const progressBar = setInterval(fakeLoading, 200);

function fakeLoading() {
    if (i === 98) clearInterval(progressBar);

    i += 1;
    state.progress = i;
}
</script>

<template>
    <ve-progress :progress="state.progress" v-bind="options">
        <template #legend>
            <span>%</span>
        </template>
        <template #legend-caption>
            <p>..Loading projects</p>
        </template>
    </ve-progress>
</template>
