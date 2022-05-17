<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n({ useScope: 'global' });
function changeLocale() {
    locale.value = 'en';
}
</script>

<template>
    <div>
        <p @click.prevent="changeLocale">{{ locale }}</p>
        <p>{{ t('message.hello') }}</p>
    </div>
</template>
