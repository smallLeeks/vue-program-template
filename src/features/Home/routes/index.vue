<template>
    <div qys-font="bold" qys-text="primary" class="shadow-card rounded" @click="handlePinia">pinia {{ counter }}</div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/index';

const store = useCounterStore();

const counter = storeToRefs(store);

const handlePinia = () => {
    store.increment();
};
</script>

<style lang="scss" scoped>
.brand {
    width: 100px;
}
</style>
