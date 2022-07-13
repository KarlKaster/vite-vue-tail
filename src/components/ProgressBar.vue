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
    animation: 'default 200 350',
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
            <div v-if="state.progress === 99">
                <div class="m-auto dot-flashing"></div>
            </div>
            <div v-else>
                <p>Project loading..</p>
            </div>
        </template>
    </ve-progress>
</template>

<style>
.dot-flashing {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    animation: dot-flashing 1s infinite linear alternate;
    animation-delay: 0.5s;
}

.dot-flashing::before,
.dot-flashing::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
}

.dot-flashing::before {
    left: -15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    animation: dot-flashing 1s infinite alternate;
    animation-delay: 0s;
}

.dot-flashing::after {
    left: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    animation: dot-flashing 1s infinite alternate;
    animation-delay: 1s;
}

@keyframes dot-flashing {
    0% {
        background-color: #9880ff;
    }

    50%,
    100% {
        background-color: #ebe6ff;
    }
}
</style>
