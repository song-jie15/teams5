<template>
    <div>
        <h1>Home</h1>
        <h1 @click="showLogin">立即学习</h1>
    </div>
</template>
<script setup lang="ts">
import { useLogin } from '../../hooks/useLogin';
const { login } = useLogin()
const showLogin = ()=>{
    login()  
}
</script>