<template>
    <el-form ref="ruleFormRef" label-width="120px" status-icon :model="ruleForm" :rules="rules">
        <el-row justify="center">
            <el-col :span="24">
                <el-form-item label="用户名" prop="userName">
                    <el-input v-model="ruleForm.userName" type="userName" autocomplete="off" />
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item label="密码" prop="password">
                    <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const ruleFormRef = ref<FormInstance>()

const validateUserName = (rule: any, value: any, callback: any) => {
    if (!value) {
        return callback(new Error('请输入用户名'))
    }
    callback()
}

const validatePassword = (rule: any, value: any, callback: any) => {
    if (!value) {
        return callback(new Error('请输入密码'))
    }
    callback()
}

const ruleForm = reactive({
    userName: '',
    password: '',
})

const rules = reactive({
    userName: [{ validator: validateUserName, trigger: 'blur' }],
    password: [{ validator: validatePassword, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) {
        return
    }
    formEl.validate(valid => {
        if (valid) {
            console.log('登录成功!')
        } else {
            console.log('登录失败!')
            return false
        }
    })
}
</script>

<style lang="scss" scoped></style>
