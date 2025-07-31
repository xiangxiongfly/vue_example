<template>
    <div class="order">
        <div class="order__price">实付金额<b>￥{{ calculations.price }}</b></div>
        <div class="order__btn" @click="handleShowConfirmChange(true)">提交订单</div>
    </div>
    <div class="mask" v-show="showMask" @click="handleShowConfirmChange(false)">
        <div class="mask__content" @click.stop>
            <h3 class="mask__content__title">确认要离开收银台？</h3>
            <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
            <div class="mask__content__btns">
                <div class="mask__content__btn mask__content__btn--first" @click="handleShowConfirmChange(false)">取消订单</div>
                <div class="mask__content__btn mask__content__btn--last" @click="handleConfirmOrder()">确认订单</div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue"
import { useRouter, useRoute } from "vue-router"
import { useStore } from "vuex"
import { useCommonCartEffect } from "../../effects/CartEffects"

// 提交订单逻辑
const useSubmitOrderEffect = (shopId, shopName, productList,) => {
    const router = useRouter()
    const store = useStore()
    const handleConfirmOrder = () => {
        store.commit("clearCartData", shopId)
        router.push({
            name: 'myOrder'
        })
    }
    return {
        handleConfirmOrder
    }
}

// 弹窗逻辑
const useShowMaskEffect = () => {
    const showMask = ref(false)
    const handleShowConfirmChange = (status) => {
        showMask.value = status
    }
    return {
        showMask,
        handleShowConfirmChange
    }
}

export default {
    name: "SubmitOrder",
    setup() {
        const route = useRoute()
        const shopId = parseInt(route.params.id, 10)
        const { calculations, shopName, productList } = useCommonCartEffect(shopId)
        const { showMask, handleShowConfirmChange } = useShowMaskEffect()
        const { handleConfirmOrder } = useSubmitOrderEffect(shopId, shopName, productList)
        return {
            showMask,
            handleShowConfirmChange,
            calculations,
            handleConfirmOrder
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/vars.scss";

.order {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    height: 0.49rem;
    line-height: 0.49rem;
    background-color: $bgColor;

    &__price {
        flex: 1;
        text-indent: 0.24rem;
        font-size: 0.14rem;
        color: $content-fontColor;
    }

    &__btn {
        width: 0.98rem;
        background-color: #4FB0F9;
        color: #fff;
        text-align: center;
        font-size: 0.14rem;
    }
}

.mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.50);
    z-index: 1;

    &__content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 3rem;
        height: 1.56rem;
        background-color: #fff;
        text-align: center;
        border-radius: 0.04rem;

        &__title {
            margin: .24rem 0 0 0;
            line-height: .26rem;
            font-size: .18rem;
            color: #333;
        }

        &__desc {
            margin: 0.08rem 0 0 0;
            font-size: 0.14rem;
            color: #666
        }

        &__btns {
            display: flex;
            margin: 0.24rem 0.58rem;
        }

        &__btn {
            flex: 1;
            width: 0.8rem;
            line-height: 0.32rem;
            border-radius: 0.16rem;
            font-size: 0.14rem;

            &--first {
                margin-right: 0.12rem;
                border: 0.01rem solid #4FB0F9;
                color: #4FB0F9;
            }

            &--last {
                margin-left: 0.12rem;
                background-color: #4FB0F9;
                color: #fff;
            }

        }
    }
}
</style>