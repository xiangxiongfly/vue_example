<template>
    <div class="mask" v-if="showCart && calculations.total > 0" @click="handleCartShowChange"></div>
    <div class="cart">
        <div class="product" v-if="showCart && calculations.total > 0">
            <div class="product__header">
                <div class="product__header__all" @click="setCartItemsChecked(shopId)">
                    <span class="product__header__icon iconfont"
                        v-html="calculations.allChecked ? '&#xe652;' : '&#xe667;'"></span>
                    全选
                </div>
                <div class="product__header__clear">
                    <span class="product__header__clear__btn" @click="cleanCartProducts(shopId)">清空购物车</span>
                </div>
            </div>
            <div class="product__item" v-for="item in productList" :key="item._id">
                <div class="product__item__checked iconfont" v-html="item.check ? '&#xe652;' : '&#xe667;'"
                    @click="changeCartItemChecked(shopId, item._id)"></div>
                <img class="product__item__img" :src="item.imgUrl" />
                <div class="product__item__detail">
                    <h4 class="product__item__title">{{ item.name }}</h4>
                    <p class="product__item__price">
                        <span class="product__item__yen">&yen;{{ item.price }}</span>
                        <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
                    </p>
                </div>
                <div class="product__number">
                    <span class="product__number__minus iconfont"
                        @click="changeCartItemInfo(shopId, item._id, item, -1)">&#xe691;</span>
                    {{ item.count || 0 }}
                    <span class="product__number__plus iconfont"
                        @click="changeCartItemInfo(shopId, item._id, item, 1)">&#xe668;</span>
                </div>
            </div>
        </div>
        <div class="check">
            <div class="check__icon">
                <img src="http://www.dell-lee.com/imgs/vue3/basket.png" class="check__icon__img"
                    @click="handleCartShowChange" />
                <div class="check__icon__tag">{{ calculations.total }}</div>
            </div>
            <div class="check__info">
                总计：<span class="check__info__price">&yen;{{ calculations.price }}</span>
            </div>
            <div class="check__btn" v-show="calculations.total > 0">
                <router-link :to="{ path: `/confirmOrder/${shopId}` }">
                    去结算
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { useCommonCartEffect } from '../../effects/CartEffects.js'

const useCartEffect = (shopId) => {
    const store = useStore()
    const { productList, calculations, changeCartItemInfo } = useCommonCartEffect(shopId)
    const changeCartItemChecked = (shopId, productId) => {
        store.commit("changeCartItemChecked", { shopId, productId })
    }
    const cleanCartProducts = (shopId) => {
        store.commit("cleanCartProducts", { shopId })
    }
    const setCartItemsChecked = (shopId) => {
        store.commit("setCartItemsChecked", { shopId })
    }
    return {
        calculations,
        productList,
        cleanCartProducts,
        changeCartItemInfo,
        changeCartItemChecked,
        setCartItemsChecked
    }
}

const toggleCartEffect = () => {
    const showCart = ref(false)
    const handleCartShowChange = () => {
        showCart.value = !showCart.value
        console.log("  showCart.value   ", showCart.value);
    }
    return { showCart, handleCartShowChange }
}

export default {
    name: "Cart",
    setup() {
        const route = useRoute()
        const shopId = route.params.id
        const {
            calculations,
            productList,
            cleanCartProducts,
            changeCartItemInfo,
            changeCartItemChecked,
            setCartItemsChecked
        } = useCartEffect(shopId)
        const {
            showCart,
            handleCartShowChange
        } = toggleCartEffect()
        return {
            calculations,
            shopId,
            productList,
            cleanCartProducts,
            changeCartItemInfo,
            changeCartItemChecked,
            setCartItemsChecked,
            showCart,
            handleCartShowChange
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/vars.scss";
@import "../../assets/styles/mixins.scss";

.mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: 1;
}

.cart {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: $bgColor;

    .product {
        overflow-y: scroll;
        background-color: $bgColor;

        &__header {
            display: flex;
            line-height: 0.52rem;
            border-bottom: 0.01rem solid $content-bgColor;
            font-size: 0.14rem;
            color: $content-fontColor;

            &__all {
                width: 0.64rem;
                margin-left: 0.18rem;
            }

            &__icon {
                display: inline-block;
                margin-right: 0.1rem;
                vertical-align: top;
                color: $btn-bgColor;
                font-size: 0.2rem;
            }

            &__clear {
                flex: 1;
                margin-right: 0.16rem;
                text-align: right;

                &__btn {
                    display: inline-block;
                }
            }
        }

        &__item {
            position: relative;
            display: flex;
            padding: 0.12rem 0;
            margin: 0 0.16rem;
            border-bottom: 0.01rem solid $content-bgColor;

            &__checked {
                line-height: 0.5rem;
                margin-right: 0.2rem;
                color: $btn_bgColor;
                font-size: 0.2rem;
            }

            &__img {
                width: 0.46rem;
                height: 0.46rem;
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

                .product__item__price {
                    margin: 0.06rem 0 0 0;
                    line-height: 0.2rem;
                    font-size: 0.14rem;
                    color: $highlight-fontColor;

                    .product__item__yen {
                        font-size: 0.12rem;
                    }

                    .product__item__origin {
                        margin-right: 0.06rem;
                        line-height: 0.2rem;
                        font-size: 0.12rem;
                        color: $light-fontColor;
                        text-decoration: line-through;
                    }
                }
            }

            .product__number {
                position: absolute;
                right: 0;
                bottom: 0.26rem;

                &__minus {
                    position: relative;
                    top: 0.02rem;
                    color: $medium-fontColor;
                    margin-right: .05rem;
                }

                &__plus {
                    position: relative;
                    top: 0.02rem;
                    color: $btn-bgColor;
                    margin-left: 0.05rem;
                }
            }
        }
    }

    .check {
        display: flex;
        height: 0.5rem;
        border-top: 0.01rem solid $content-bgColor;

        &__icon {
            position: relative;
            width: 0.84rem;

            &__img {
                display: block;
                margin: 0.12rem auto;
                width: 0.28rem;
                height: 0.26rem;
            }

            &__tag {
                position: absolute;
                left: 0.46rem;
                top: 0.04rem;
                padding: 0 0.04rem;
                min-width: 0.2rem;
                height: 0.2rem;
                line-height: 0.2rem;
                background-color: $highlight-fontColor;
                border-radius: 0.1rem;
                font-size: 0.12rem;
                text-align: center;
                color: #fff;
                transform: scale(0.5);
                transform-origin: left center;
            }
        }

        &__info {
            flex: 1;
            color: $content-fontColor;
            font-size: .12rem;

            &__price {
                line-height: 0.49rem;
                color: $highlight-fontColor;
                font-size: 0.18rem;
            }
        }

        &__btn {
            width: 0.98rem;
            background-color: #4FB0F9;
            text-align: center;
            line-height: 0.5rem;
            font-size: 0.14rem;

            a {
                color: $bgColor;
                text-decoration: none;
            }
        }
    }
}
</style>