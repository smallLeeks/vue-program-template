<script setup lang="ts"></script>

<template>
    <div>
        <RouterLink to="/">Home</RouterLink>
        <br />
        <RouterLink to="/about">About</RouterLink>
    </div>
    <RouterView />
    <!-- 定义子应用容器 -->
    <div id="child-vue-app"></div>
</template>

<style scoped></style>
