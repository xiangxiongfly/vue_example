import { createStore } from "vuex";

const setLocalCartList = (state) => {
  const { cartList } = state;
  const cartListStr = JSON.stringify(cartList);
  localStorage.cartList = cartListStr;
};

const getLocalCartList = () => {
  try {
    return JSON.parse(localStorage.cartList);
  } catch (e) {
    return {};
  }
};

export default createStore({
  state: {
    cartList: getLocalCartList(),
  },
  mutations: {
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo } = payload;
      let shopInfo = state.cartList[shopId] || { shopName: "", productList: {} };
      let product = shopInfo.productList[productId];
      if (!product) {
        productInfo.count = 0;
        product = productInfo;
      }
      product.count = product.count + payload.num;
      if (payload.num > 0) {
        product.check = true;
      }
      if (product.count < 0) {
        product.count = 0;
      }
      shopInfo.productList[productId] = product;
      state.cartList[shopId] = shopInfo;
      setLocalCartList(state);
    },
    changeShopName(state, payload) {
      const { shopId, shopName } = payload;
      const shopInfo = state.cartList[shopId] || { shopName: "", productList: {} };
      shopInfo.shopName = shopName;
      state.cartList[shopId] = shopInfo;
      setLocalCartList(state);
    },
    changeCartItemChecked(state, payload) {
      const { shopId, productId } = payload;
      const product = state.cartList[shopId].productList[productId];
      product.check = !product.check;
      setLocalCartList(state);
    },
    cleanCartProducts(state, payload) {
      const { shopId } = payload;
      state.cartList[shopId].productList = {};
      setLocalCartList(state);
    },
    setCartItemsChecked(state, payload) {
      const { shopId } = payload;
      const productList = state.cartList[shopId].productList;
      if (productList) {
        for (let key in productList) {
          const product = productList[key];
          product.check = true;
        }
      }
      setLocalCartList(state);
    },
    clearCartData(state, shopId) {
      state.cartList[shopId].productList = {};
    },
  },
});
