<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';

const store = useStore();

defineProps<{ msg: string }>();

store.commit('increment');
console.log(store.state.count);
const { t, locale } = useI18n({ useScope: 'global' });
function changeLocale() {
    locale.value = 'en';
}
</script>

<template>
    <div>
        <p @click.prevent="changeLocale">{{ locale }}</p>
        <p>{{ t('message.hello') }}</p>
        <div>
            <Icon icon="mdi-light:home" class="m-auto" />
        </div>

        <h1>{{ msg }}</h1>
        <p>
            Recommended IDE setup:
            <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
            +
            <a href="https://github.com/johnsoncodehk/volar" target="_blank"
                >Volar</a
            >
        </p>

        <p>See <code>README.md</code> for more information.</p>

        <p>
            <a href="https://vitejs.dev/guide/features.html" target="_blank">
                Vite Docs
            </a>
            |
            <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
        </p>

        <p class="text-xl text-center">
            Edit
            <code>components/HelloWorld.vue</code> to test hot module
            replacement.
        </p>
    </div>
</template>

<style scoped lang="scss">
p {
    a {
        color: #42b983;
    }
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
