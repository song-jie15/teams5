import { IS_SHOW_LOGIN } from "@/components/Login/type";
import { inject,ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useUserStore } from "@/stores/user";
export const useLogin = ()=>{
   const isShowLogin = inject(IS_SHOW_LOGIN, ref(false))
// if (!isShowLogin) {
//   ;(isShowLogin as any).value = false
// }
    const showLoginRef = isShowLogin ?? ref(false)
    const login = () =>{
        showLoginRef.value = true

    }
    const logout = () => {
        useAuthStore().logout()
        useUserStore().logout()
        showLoginRef.value = false
    }
    return {login,logout}
}
