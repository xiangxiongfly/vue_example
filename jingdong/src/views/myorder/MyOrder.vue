<template>
    <div class="wrapper">
        <div class="title">我的订单</div>
        <div class="orders">
            <div class="order" v-for="(item, index) in list" :key="index">
                <div class="order__title">
                    {{ item.shopName }}
                    <span class="order__status">{{ item.isCanceled ? "已取消" : "已下单" }}</span>
                </div>
                <div class="order__content">
                    <div class="order__content__imgs">
                        <template v-for="(innerItem, innerIndex) in item.products" :key="innerIndex">
                            <img class="order__content__img" :src="innerItem.product.img" v-if="innerIndex <= 3" />
                        </template>
                    </div>
                    <div class="order__content__info">
                        <div class="order__content__price">￥{{ totalPrice }}</div>
                        <div class="order__content__count">共{{ totalNumber }}件</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <TabBar :currentIndex="2" />
</template>

<script>
import TabBar from "../../components/TabBar.vue"

const useOrderListEffect = () => {
    const list = [
        {
            "shopId": "1",
            "shopName": "沃尔玛",
            "isCanceled": false,
            "products": [
                {
                    "orderSales": 5,
                    "product": {
                        "name": "番茄 250g / 份",
                        "img": "http://www.dell-lee.com/imgs/vue3/tomato.png",
                        "price": 33.6,
                        "sales": 6
                    }
                },
                {
                    "orderSales": 10,
                    "product": {
                        "name": "车厘子 500g / 份",
                        "img": "http://www.dell-lee.com/imgs/vue3/cherry.png",
                        "price": 33.6,
                        "sales": 6
                    }
                }
            ]
        }
    ]
    let totalNumber = 10
    let totalPrice = 50
    return { list, totalNumber, totalPrice }
}

export default {
    name: "MyOrder",
    components: { TabBar },
    setup() {
        const { list, totalNumber, totalPrice } = useOrderListEffect()
        return { list, totalNumber, totalPrice }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/vars.scss";

.wrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow-y: auto;
    background: rgb(248, 248, 248);
}

.title {
    line-height: 0.44rem;
    background-color: $bgColor;
    font-size: 0.16rem;
    color: $content_fontColor;
    text-align: center;
}

.order {
    margin: .16rem .18rem;
    padding: .16rem;
    background-color: $bgColor;

    &__title {
        margin-bottom: 0.16rem;
        line-height: 0.22rem;
        font-size: 0.16rem;
        color: $content-fontColor;
    }

    &__status {
        float: right;
        font-size: 0.14rem;
        color: $light-fontColor;
    }

    &__content {
        display: flex;

        &__imgs {
            flex: 1;
        }

        &__img {
            width: 0.4rem;
            height: 0.4rem;
            margin-right: 0.12rem;
        }

        &__info {
            width: 0.7rem;
        }

        &__price {
            margin-bottom: 0.04rem;
            line-height: .2rem;
            font-size: 0.14rem;
            color: $highlight-fontColor;
            text-align: right;
        }

        &__count {
            line-height: .14rem;
            font-size: .12rem;
            color: $content-fontColor;
            text-align: right;
        }
    }
}
</style>