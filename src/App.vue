<script setup lang="ts"></script>

<template>
    <div>
        <RouterLink to="/">Home</RouterLink>
        <a-divider type="vertical" />
        <RouterLink to="/about">About</RouterLink>
    </div>
    <RouterView />
</template>

<style scoped></style>
