<script setup lang="ts">
import { reactive, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n({ useScope: 'global' });
const state = reactive({
    language: 'es',
});

watch(state, (newState) => {
    locale.value = newState.language;
});
</script>

<template>
    <div>
        <select id="language" v-model="state.language" name="language">
            <option value="en">English</option>
            <option value="ja">Japanese</option>
            <option value="es">Spanish</option>
        </select>
        <p>{{ locale }}</p>
        <p>{{ t('message.hello') }}</p>
    </div>
</template>
