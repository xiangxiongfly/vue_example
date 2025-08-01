import {getCategoryApi} from "@/api/categery.js";
import {defineStore} from "pinia";
import {ref} from "vue";

export const useCategoryStore = defineStore("category", () => {
  const categoryList = ref([]);

  const getCategoryList = async () => {
    const res = await getCategoryApi();
    categoryList.value = res.result;
  };

  return {
    categoryList,
    getCategoryList
  };
});
