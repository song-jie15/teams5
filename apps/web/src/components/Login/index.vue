<template>
    <div>
        <div v-if="isShowLogin" class="fixed inset-0 bg-black opacity-30 filter blur-sm z-40"></div>
    <div  v-if="isShowLogin" class="fixed inset-30  flex items-center justify-center z-50">
        <div class="w-[1200px] h-[700px] bg-white rounded-[20px] shadow-2xl overflow-hidden flex">
            <ModelViewer @changeType="changeType" ref="modelViewerRef" />
            
            <div class="flex-1 flex flex-col justify-center px-12 py-10 bg-white">
                <LoginForm v-if="loginType === 'login'" @close="closeModal" />
                <RegisterForm v-else @close="closeModal" />
            </div>
        </div>
    </div>
    </div>
</template>

<script setup lang="ts">
import ModelViewer from '../../components/Login/ModelViewer.vue'
import LoginForm from './LoginForm.vue'
import RegisterForm from './RegisterForm.vue'
import { inject, ref, onUnmounted } from 'vue'
import { IS_SHOW_LOGIN } from './type'

const isShowLogin = inject(IS_SHOW_LOGIN, ref(false))
const loginType = ref<'login' | 'register'>('login')

const changeType = (type: 'login' | 'register') => {
    loginType.value = type
}

const closeModal = () => {
    isShowLogin.value = false
}

const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
        closeModal()
    }
}
window.addEventListener('keydown', handleKeydown)
onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
})
</script>
