import { computed } from 'vue'
import { avatarUrl } from '@/apis'
import defaultAvatar from '@/assets/images/avatar/default.png'
import { useUserStore } from '@/stores/user'

export const useAvatar = () => {
  const userStore = useUserStore()

  const resolveAvatar = (url?: string | null) => {
    if (!url) {
      return defaultAvatar
    }
    if (/^https?:\/\//.test(url) || url.startsWith('data:')) {
      return url
    }
    return `${avatarUrl}${url.startsWith('/') ? url : `/${url}`}`
  }

  const avatar = computed(() => {
    return resolveAvatar(userStore.getUser?.avatar)
  })

  const customAvatar = (avatar?: string | null) => {
    return resolveAvatar(avatar)
  }

  return {
    avatar,
    customAvatar,
  }
}
