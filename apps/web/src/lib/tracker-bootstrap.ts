import { Tracker } from '@en/tracker'
import { watch } from 'vue'
import { useUserStore } from '@/stores/user'

export const appTracker = new Tracker({
  baseUrl: '/api/v1',
  uv: {
    api: '/tracker/uv',
    updateApi: '/tracker/update-uv',
  },
  pv: {
    api: '/tracker/pv',
  },
  event: {
    api: '/tracker/event',
  },
  error: {
    api: '/tracker/error',
  },
  performance: {
    api: '/tracker/performance',
  },
})

export function setupTrackerUserBinding() {
  const userStore = useUserStore()
  watch(
    () => userStore.getUser?.id,
    (id) => {
      if (id) {
        void appTracker.setUserId(id)
      }
    },
    { immediate: true },
  )
}
