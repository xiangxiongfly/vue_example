import {loginApi} from "@/api/user.js";
import {defineStore} from "pinia";
import {ref} from "vue";

export const useUserStore = defineStore("userStore", () => {
  const userInfo = ref({});

  async function getUserInfo(accout, password) {
    const {result} = await loginApi(accout, password);
    userInfo.value = result;
  }

  function clearUserInfo() {
    userInfo.value = {};
  }

  return {userInfo, getUserInfo, clearUserInfo};
}, {
  persist: true,
});

