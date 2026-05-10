import { IS_SHOW_LOGIN } from "@/components/Login/type";
import { inject, ref } from "vue";
import { useAuthStore } from "@/stores/auth";

export const useLogin = () => {
    const isShowLogin = inject(IS_SHOW_LOGIN, ref(false))
    const authStore = useAuthStore()

    const login = () => {
        return new Promise<void>((resolve, reject) => {
            if (authStore.user) {
                resolve()
            } else {
                isShowLogin.value = true
                reject()
            }
        })
    }

    const hide = () => {
        isShowLogin.value = false
    }

    return { login, hide }
}
