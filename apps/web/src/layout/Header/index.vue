<template>
    <header class="flex items-center h-20 border-b border-gray-200 justify-center sticky top-0 bg-white z-10">
        <div class="w-[1200px] mx-auto flex items-center justify-between">
            <div
                class="text-2xl font-bold bg-indigo-700 text-white rounded-[10px] px-2 py-1 w-10 flex items-center justify-center h-10 ">
                E</div>
            <div class="text-2xl font-bold">English App</div>
            <template v-for="route in routes" :key="route.path">
                <div @click="router.push(route.path)" :class="isActive(route.path)"
                class="flex items-center gap-2 cursor-pointer rounded-[10px] px-2 py-1">
                    <el-icon>
                        <component :is="route.icon" />
                    </el-icon>
                    <span>{{ route.name }}</span>
                </div>
            </template>
            <div class="flex items-center gap-2 bg-blue-200 text-blue-700 rounded-full px-2 py-1"><el-icon>
                    <Sunny />
                </el-icon> <span class="font-bold text-sm">{{ authStore.user?.dayNumber ?? 0 }}</span></div>
            <div class="flex items-center gap-2 bg-amber-200 text-amber-700 rounded-full px-2 py-1"><el-icon>
                    <Star />
                </el-icon> <span class="font-bold text-sm">{{ authStore.user?.wordNumber ?? 0 }}</span></div>
            <div class="border-l border-gray-200 pl-4">
                <el-popover v-if="authStore.user" placement="bottom" trigger="click" :width="160">
                    <template #reference>
                        <div class="flex items-center gap-2 cursor-pointer">
                            <img class="w-10 h-10 rounded-full"
                                :src="authStore.user.avatar || 'https://gips3.baidu.com/it/u=3493347002,3356558679&fm=3074&app=3074&f=PNG?w=2048&h=2048'" />
                            <span class="text-sm font-bold">{{ authStore.user.name }}</span>
                        </div>
                    </template>
                    <div class="py-1">
                        <div class="px-3 py-2 text-xs text-gray-500">{{ authStore.user.phone }}</div>
                        <el-divider class="my-1" />
                        <div class="flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 rounded"
                            @click="handleLogout">
                            <el-icon><SwitchButton /></el-icon>
                            <span>退出登录</span>
                        </div>
                    </div>
                </el-popover>
                <div v-else class="flex items-center gap-2 cursor-pointer" @click="login">
                    <img class="w-10 h-10 rounded-full"
                        src="https://gips3.baidu.com/it/u=3493347002,3356558679&fm=3074&app=3074&f=PNG?w=2048&h=2048" />
                    <span class="text-sm font-bold">未登录</span>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { Sunny, Star, HomeFilled, Notebook, MagicStick, Reading, Setting, SwitchButton } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { useLogin } from '@/hooks/useLogin';
const router = useRouter()
const authStore = useAuthStore()
const { login } = useLogin()
const currentPath = ref('')
const routes = [
    { path: '/', name: '主页',icon:HomeFilled },
    { path: '/smart/chat', name: 'AI',icon:MagicStick },
    { path: '/word-book/index', name: '词库' ,icon:Notebook},
    { path: '/courses/index', name: '课程',icon:Reading },
    { path: '/setting/index', name: '设置' ,icon:Setting},
]
const isActive = (path: string) => {
    return currentPath.value === path ? 'bg-blue-200 text-blue-700' :'text-gray-500 hover:bg-blue-200 hover:text-blue-700'
}
watch(()=>router.currentRoute.value,(newVal)=>{
    currentPath.value = newVal.path
},{
    immediate:true
})

const handleLogout = () => {
    authStore.logout()
    ElMessage.success('已退出登录')
}
</script>
