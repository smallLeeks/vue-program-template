<template>
    <div class="">
        <div>欢迎，登录成功</div>
        <el-button type="primary" @click="handleLogout">退出登录</el-button>
    </div>
</template>

<script lang="ts" setup>
const route = useRouter()

const handleLogout = () => {
    route.replace('/login')
}
</script>
