<template>
  <div class="content">
    <div class="category">
      <div class="category__item" :class="{ 'category__item--active': currentTab === item.tab }"
        v-for="item in categories" :key="item.name" @click="handleTabClick(item.tab)">
        {{ item.name }}
      </div>
    </div>
    <div class="product">
      <div class="product__item" v-for="item in productList" :key="item._id">
        <img class="product__item__img" :src="item.imgUrl">
        <div class="product__item__detail">
          <h4 class="product__item__title">{{ item.name }}</h4>
          <p class="product__item__sales">月售：{{ item.sales }}</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>
            {{ item.price }}
            <span class="product__item__origin">&yen;</span>
          </p>
        </div>
        <div class="product__item__number">
          <span class="product__number__minus iconfont"
            @click="changeCartItem(shopId, item._id, item, -1, shopName)">&#xe691;</span>
          {{ getProductCartCount(shopId, item._id) }}
          <span class="product__number__plus iconfont"
            @click="changeCartItem(shopId, item._id, item, 1, shopName)">&#xe668;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import {
  computed,
  reactive,
  ref,
  toRefs,
  watchEffect
} from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from "vuex"
import { useCommonCartEffect } from "../../effects/CartEffects.js"

// tab数据
const categories = [{ name: "全部商品", tab: "all" }, { name: "秒杀", tab: "seckill" }, { name: "新鲜水果", tab: "fruit" }]

// product数据
const productList1 = [{
  "_id": "1",
  "name": "番茄1 250g / 份",
  "imgUrl": "http://www.dell-lee.com/imgs/vue3/tomato.png",
  "sales": 10,
  "price": 33.6,
  "oldPrice": 39.6
},
{
  "_id": "2",
  "name": "车厘子1 500g / 份",
  "imgUrl": "http://www.dell-lee.com/imgs/vue3/cherry.png",
  "sales": 10,
  "price": 99.6,
  "oldPrice": 119.6
},
{
  "_id": "3",
  "name": "橙子1 500g/份",
  "imgUrl": "http://www.dell-lee.com/imgs/vue3/orange.png",
  "sales": 110,
  "price": 12.6,
  "oldPrice": 22.6
},
{
  "_id": "4",
  "name": "帝王蟹1 250g / 份",
  "imgUrl": "http://www.dell-lee.com/imgs/vue3/crab.png",
  "sales": 10,
  "price": 199.9,
  "oldPrice": 299.9
}]
const productList2 = [{
  "_id": "5",
  "name": "番茄2 250g / 份",
  "imgUrl": "http://www.dell-lee.com/imgs/vue3/tomato.png",
  "sales": 10,
  "price": 33.6,
  "oldPrice": 39.6
},
{
  "_id": "6",
  "name": "车厘子2 500g / 份",
  "imgUrl": "http://www.dell-lee.com/imgs/vue3/cherry.png",
  "sales": 10,
  "price": 99.6,
  "oldPrice": 119.6
},
{
  "_id": "7",
  "name": "橙子2 500g/份",
  "imgUrl": "http://www.dell-lee.com/imgs/vue3/orange.png",
  "sales": 110,
  "price": 12.6,
  "oldPrice": 22.6
},
{
  "_id": "8",
  "name": "帝王蟹2 250g / 份",
  "imgUrl": "http://www.dell-lee.com/imgs/vue3/crab.png",
  "sales": 10,
  "price": 199.9,
  "oldPrice": 299.9
}]

// 内容列表
let productList = ref([...productList1])

// Tab切换逻辑
const useTabEffect = () => {
  const currentTab = ref(categories[0].tab)
  const handleTabClick = (tab) => {
    currentTab.value = tab
    if (currentTab.value === "all") {
      productList.value = productList1
    } else {
      productList.value = productList2
    }
  }
  return { currentTab, handleTabClick }
}

// 购物车逻辑
const useCartEffect = () => {
  const { changeCartItemInfo, cartList } = useCommonCartEffect()
  const changeShopName = (shopId, shopName) => {
    store.commit("changeShopName", { shopId, shopName })
  }
  const changeCartItem = (shopId, productId, item, num, shopName) => {
    changeCartItemInfo(shopId, productId, item, num)
    changeShopName(shopId, shopName)
  }
  const getProductCartCount = (shopId, productId) => {
    return cartList?.[shopId]?.productList?.[productId]?.count || 0
  }
  return { cartList, changeCartItem, getProductCartCount }
}

export default {
  name: "Content",
  props: ['shopName'],
  setup() {
    const route = useRoute()
    const shopId = route.params.id
    console.log("shopId:", shopId);
    const { currentTab, handleTabClick } = useTabEffect()
    const { cartList, changeCartItem, getProductCartCount } = useCartEffect()
    return {
      shopId,
      categories,
      currentTab,
      handleTabClick,
      productList,
      cartList, changeCartItem, getProductCartCount
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
@import "../../assets/styles/vars.scss";

.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: 0.5rem;

  .category {
    overflow-y: scroll;
    width: 0.76rem;
    height: 100%;
    background-color: $search-bgColor;

    &__item {
      line-height: 0.4rem;
      text-align: center;
      font-size: 0.14rem;
      color: #333;

      &--active {
        background-color: $bgColor;
      }
    }
  }

  .product {
    overflow-y: scroll;
    flex: 1;

    &__item {
      position: relative;
      display: flex;
      padding: 0.12rem 0;
      margin: 0 0.16rem;
      border-bottom: 0.01rem solid $content-bgColor;


      &__img {
        width: 0.68rem;
        height: 0.68rem;
        margin-right: 0.16rem;
      }

      &__detail {
        overflow: hidden;

        .product__item__title {
          margin: 0;
          line-height: 0.2rem;
          font-size: 0.14rem;
          color: $content-fontColor;
          @include ellipsis;
        }

        .product__item__sales {
          margin: 0.06rem 0;
          font-size: 0.12rem;
          color: $content-fontColor;
        }

        .product__item__price {
          margin: 0;
          line-height: 0.2rem;
          font-size: 0.14rem;
          color: $highlight-fontColor;
        }

        .product__item__yen {
          font-size: 0.12rem;
        }

        .product__item__origin {
          margin-left: 0.06rem;
          line-height: 0.2rem;
          font-size: 0.12rem;
          color: $light-fontColor;
          text-decoration: line-through;
        }
      }

      &__number {
        position: absolute;
        right: 0;
        bottom: 0.12rem;
        line-height: 0.18rem;

        .product__number__minus {
          position: relative;
          top: 0.02rem;
          color: $medium-fontColor;
          margin-right: 0.05rem;
        }

        .product__number__plus {
          position: relative;
          top: 0.02rem;
          color: $btn-bgColor;
          margin-left: 0.05rem;
        }
      }
    }
  }
}
</style>