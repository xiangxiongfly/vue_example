import {defineStore} from "pinia";
import {ref} from "vue";

export const useCartStore = defineStore("useCartStore", () => {

  const cartList = ref([]);

  function addCart(goods) {
    console.log("添加购物车", goods);
    const item = cartList.value.find(item => item.skuId === goods.skuId);
    if (item) {
      item.count++;
    } else {
      cartList.value.push(goods);
    }
  }

  return {cartList, addCart};
}, {
  persist: true,
});
