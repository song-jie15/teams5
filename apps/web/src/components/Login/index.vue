<template>
    <div>
        <div v-if="isShowLogin" class="fixed inset-0 bg-black opacity-30 filter blur-sm z-40"></div>
    <div  v-if="isShowLogin" class="fixed inset-30  flex items-center justify-center z-50">
        <div class="w-[1200px] h-[700px] bg-white rounded-[20px] shadow-2xl overflow-hidden flex">
            <!-- 左侧 3D 模型区域 -->
            <ModelViewer @changeType="changeType" ref="modelViewerRef" />
            
            <!-- 右侧登录表单区域 -->
            <div class="flex-1 flex flex-col justify-center px-12 py-10 bg-white">
                <!-- 根据loginType显示对应的组件 -->
                <LoginForm v-if="loginType === 'login'" @close="isShowLogin = false" />
                <RegisterForm v-else @close="isShowLogin = false" />
            </div>
        </div>
    </div>
    </div>
</template>

<script setup lang="ts">
import ModelViewer from './ModelViewer.vue'
import LoginForm from './LoginForm.vue'
import RegisterForm from './RegisterForm.vue'
import { inject, ref, watch, onUnmounted } from 'vue'
import { IS_SHOW_LOGIN } from './type'

const isShowLogin = inject(IS_SHOW_LOGIN, ref(false))
const loginType = ref<'login' | 'register'>('login')

const changeType = (type: 'login' | 'register') => {
    loginType.value = type
}

const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
        isShowLogin.value = false
    }
}
window.addEventListener('keydown', handleKeydown)
onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
})
</script>