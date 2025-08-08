import {getCategoryApi} from "@/api/layout.js";
import {defineStore} from "pinia";
import {ref} from "vue";

export const useCategoryStore = defineStore("category", () => {
  const categoryList = ref([]);

  async function getCategoryList() {
    const res = await getCategoryApi();
    categoryList.value = res.result;
  }

  return {
    categoryList,
    getCategoryList
  };
});
