<template>
  <div>
    <RouterView />
    <Login />
  </div>
</template>

<script setup >
import { RouterView } from 'vue-router'
import Login from './components/Login/index.vue'
import { provide, ref, onMounted, onUnmounted } from 'vue';
import { IS_SHOW_LOGIN } from './components/Login/type';
const isShowLogin = ref(false)
provide(IS_SHOW_LOGIN, isShowLogin)

const handleAuthEvent = () => {
  isShowLogin.value = true
}

onMounted(() => {
  window.addEventListener('auth:unauthorized', handleAuthEvent)
  window.addEventListener('auth:login-required', handleAuthEvent)
})

onUnmounted(() => {
  window.removeEventListener('auth:unauthorized', handleAuthEvent)
  window.removeEventListener('auth:login-required', handleAuthEvent)
})
</script>
