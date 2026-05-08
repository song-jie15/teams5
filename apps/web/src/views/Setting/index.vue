<template>
    <div class="w-[1200px] mx-auto mt-10 pb-30">
        <div class="text-2xl font-bold text-gray-800 mb-8">个人设置</div>

        <div class="flex gap-8">
            <!-- 左侧菜单 -->
            <div class="w-48 flex-shrink-0">
                <el-menu :default-active="activeTab" @select="activeTab = $event" class="border-r-0">
                    <el-menu-item index="profile">
                        <el-icon><User /></el-icon>
                        <span>个人信息</span>
                    </el-menu-item>
                    <el-menu-item index="security">
                        <el-icon><Lock /></el-icon>
                        <span>安全设置</span>
                    </el-menu-item>
                </el-menu>
            </div>

            <!-- 右侧内容 -->
            <div class="flex-1 bg-white rounded-[16px] border border-gray-200 p-8">
                <!-- 个人信息 -->
                <div v-if="activeTab === 'profile'">
                    <div class="text-lg font-bold text-gray-800 mb-6">个人信息</div>

                    <div class="flex items-center gap-6 mb-8">
                        <img class="w-20 h-20 rounded-full"
                            :src="form.avatar || 'https://gips3.baidu.com/it/u=3493347002,3356558679&fm=3074&app=3074&f=PNG?w=2048&h=2048'" />
                        <div>
                            <div class="text-lg font-bold text-gray-800">{{ form.name }}</div>
                            <div class="text-sm text-gray-500 mt-1">{{ form.phone }}</div>
                        </div>
                    </div>

                    <el-form ref="profileFormRef" :model="form" :rules="profileRules" label-width="100" class="max-w-md">
                        <el-form-item label="用户名" prop="name">
                            <el-input v-model="form.name" />
                        </el-form-item>
                        <el-form-item label="邮箱" prop="email">
                            <el-input v-model="form.email" placeholder="请输入邮箱(可选)" />
                        </el-form-item>
                        <el-form-item label="头像链接" prop="avatar">
                            <el-input v-model="form.avatar" placeholder="请输入头像URL" />
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" :loading="profileLoading" @click="handleUpdateProfile">
                                保存修改
                            </el-button>
                        </el-form-item>
                    </el-form>
                </div>

                <!-- 安全设置 -->
                <div v-if="activeTab === 'security'">
                    <div class="text-lg font-bold text-gray-800 mb-6">修改密码</div>

                    <el-form ref="passwordFormRef" :model="passwordForm" :rules="passwordRules" label-width="100" class="max-w-md">
                        <el-form-item label="原密码" prop="oldPassword">
                            <el-input v-model="passwordForm.oldPassword" type="password" show-password />
                        </el-form-item>
                        <el-form-item label="新密码" prop="newPassword">
                            <el-input v-model="passwordForm.newPassword" type="password" show-password />
                        </el-form-item>
                        <el-form-item label="确认密码" prop="confirmPassword">
                            <el-input v-model="passwordForm.confirmPassword" type="password" show-password />
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" :loading="passwordLoading" @click="handleChangePassword">
                                修改密码
                            </el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const activeTab = ref('profile')
const profileLoading = ref(false)
const passwordLoading = ref(false)
const profileFormRef = ref<FormInstance>()
const passwordFormRef = ref<FormInstance>()

const form = reactive({
    name: '',
    email: '',
    avatar: '',
    phone: '',
})

const profileRules = {
    name: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 2, max: 10, message: '用户名长度为2-10位', trigger: 'blur' },
    ],
    email: [
        { pattern: /^$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: '邮箱格式不正确', trigger: 'blur' },
    ],
}

const passwordForm = reactive({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
})

const passwordRules = {
    oldPassword: [
        { required: true, message: '请输入原密码', trigger: 'blur' },
    ],
    newPassword: [
        { required: true, message: '请输入新密码', trigger: 'blur' },
        { min: 6, max: 16, message: '密码长度为6-16位', trigger: 'blur' },
    ],
    confirmPassword: [
        { required: true, message: '请确认新密码', trigger: 'blur' },
        {
            validator: (_rule: any, value: string, callback: any) => {
                if (value !== passwordForm.newPassword) {
                    callback(new Error('两次输入的密码不一致'))
                } else {
                    callback()
                }
            },
            trigger: 'blur',
        },
    ],
}

onMounted(() => {
    if (authStore.user) {
        form.name = authStore.user.name || ''
        form.email = authStore.user.email || ''
        form.avatar = authStore.user.avatar || ''
        form.phone = authStore.user.phone || ''
    }
})

const handleUpdateProfile = async () => {
    if (!profileFormRef.value) return
    const valid = await profileFormRef.value.validate().catch(() => false)
    if (!valid) return
    profileLoading.value = true
    try {
        await authStore.updateProfile({
            name: form.name,
            email: form.email || undefined,
            avatar: form.avatar || undefined,
        })
        ElMessage.success('个人信息已更新')
    } catch (error: any) {
        ElMessage.error(error?.response?.data?.message || '更新失败，请重试')
    } finally {
        profileLoading.value = false
    }
}

const handleChangePassword = async () => {
    if (!passwordFormRef.value) return
    const valid = await passwordFormRef.value.validate().catch(() => false)
    if (!valid) return
    passwordLoading.value = true
    try {
        await authStore.changePassword({
            oldPassword: passwordForm.oldPassword,
            newPassword: passwordForm.newPassword,
        })
        ElMessage.success('密码修改成功')
        passwordForm.oldPassword = ''
        passwordForm.newPassword = ''
        passwordForm.confirmPassword = ''
    } catch (error: any) {
        ElMessage.error(error?.response?.data?.message || '密码修改失败，请重试')
    } finally {
        passwordLoading.value = false
    }
}
</script>
