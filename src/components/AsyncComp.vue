<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{ promise: Promise<void> }>();

await props.promise;
</script>

<template>
    <div>resolved</div>
</template>
