import { computed } from 'vue'
import { avatarUrl } from '@/apis'
import defaultAvatar from '@/assets/images/avatar/default.png'
import { useUserStore } from '@/stores/user'
export const useAvatar = () => {
    const userStore = useUserStore()
    //用户头像
    const avatar = computed(() => {
        if(userStore.getUser?.avatar) {
            return avatarUrl + userStore.getUser.avatar
        }
        else {
            return defaultAvatar
        }
    })
    //自定义头像路径
    const customAvatar = (avatar?: string | null) => {
        if(avatar) {
            return avatarUrl + avatar
        }
        else {
            return defaultAvatar
        }
    }
    return {
        avatar,
        customAvatar
    }
}