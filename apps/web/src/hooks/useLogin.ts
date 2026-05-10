import { IS_SHOW_LOGIN } from "@/components/Login/type";
import { inject, ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useUserStore } from "@/stores/user";

export const useLogin = () => {
  const isShowLogin = inject(IS_SHOW_LOGIN, ref(false));
  const authStore = useAuthStore();
  const userStore = useUserStore();

  // 带 Promise 的登录判断（支持 await，最实用）
  const login = () => {
    return new Promise<void>((resolve, reject) => {
      if (authStore.user) {
        // 已登录
        resolve();
      } else {
        // 未登录，显示登录框
        isShowLogin.value = true;
        reject();
      }
    });
  };

  // 关闭登录框
  const hide = () => {
    isShowLogin.value = false;
  };

  // 登出（清理两个 store）
  const logout = () => {
    authStore.logout();
    userStore.logout();
    hide();
  };

  return { login, hide, logout };
};