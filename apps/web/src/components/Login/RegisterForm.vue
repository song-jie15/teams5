<template>
    <div>
        <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">欢迎注册</h1>
        <p class="text-gray-500 text-sm">请填写以下信息以完成注册</p>
    </div>
    <el-form ref="formRef" :model="form" :rules="rules" label-width="80" label-position="top" class="space-y-6">
        <el-form-item  prop="name">
            <el-input v-model="form.name" placeholder="请输入用户名" size="large" class="h-12" :prefix-icon="User" />
        </el-form-item>
        <el-form-item  prop="phone">
            <el-input v-model="form.phone" placeholder="请输入手机号" size="large" class="h-12" :prefix-icon="User" />
        </el-form-item>
        <el-form-item  prop="email">
            <el-input v-model="form.email" placeholder="请输入邮箱(可选)" size="large" class="h-12" :prefix-icon="User" />
        </el-form-item>
        <el-form-item  prop="password">
            <el-input v-model="form.password" type="password" placeholder="请输入密码" size="large" class="h-12"
                :prefix-icon="Lock" show-password />
        </el-form-item>
        <el-form-item class="pt-4">
            <el-button type="primary" size="large"
                class="w-full h-12 text-base font-semibold bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 border-0"
                :loading="loading" @click="handleRegister">
                注册
            </el-button>
        </el-form-item>
    </el-form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'
import { useAuthStore } from '../../stores/auth'
import { useRouter } from 'vue-router'

const emit = defineEmits(['close'])
const router = useRouter()
const authStore = useAuthStore()
const formRef = ref<FormInstance>()
const loading = ref(false)
const form = ref({
    name: '',
    phone: '',
    email: '',
    password: '',
})

const rules = {
    name: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 2, max: 10, message: '用户名长度为2-10位', trigger: 'blur' },
    ],
    phone: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' },
    ],
    email: [
        { pattern: /^$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: '邮箱格式不正确', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 16, message: '密码长度为6-16位', trigger: 'blur' },
    ],
}

const handleRegister = async () => {
    if (!formRef.value) return
    const valid = await formRef.value.validate().catch(() => false)
    if (!valid) return
    loading.value = true
    try {
        const { email, ...rest } = form.value
        await authStore.register(email ? { ...rest, email } : rest)
        ElMessage.success('注册成功')
        emit('close')
    } catch (error: any) {
        ElMessage.error(error?.response?.data?.message || '注册失败，请重试')
    } finally {
        loading.value = false
    }
}
</script>
