<script>
export default {
    name: "TabBar",
    props: ["currentIndex"],
    setup() {
        const tabBarList = [
            { icon: "&#xe6f3;", title: "首页", to: { name: "home" } },
            { icon: "&#xe7e5;", title: "购物车", to: { name: "home" } },
            { icon: "&#xe61e;", title: "订单", to: { name: "myOrder" } },
            { icon: "&#xe660;", title: "我的", to: { name: "home" } }
        ]
        return { tabBarList }
    }
}
</script>

<template>
    <div class="tabbar">
        <div v-for="(item, index) in tabBarList"
            :class="{ 'tabbar__item': true, 'tabbar__item--active': index === currentIndex }" :key="item">
            <router-link :to="item.to">
                <div class="iconfont" v-html="item.icon"></div>
                <div class="tabbar__title">{{ item.title }}</div>
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/vars.scss";

.tabbar {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.49rem;
    display: flex;
    padding: 0 0.18rem;
    border-top: 0.01rem solid #f1f1f1;
    box-sizing: border-box;

    &__item {
        flex: 1;
        text-align: center;

        a {
            color: #333;
            text-decoration: none;
        }

        .iconfont {
            margin: 0.07rem 0 0.02rem 0;
            font-size: 0.18rem;
        }

        &--active {
            a {
                color: #1FA4FC;
            }
        }
    }

    &__title {
        font-size: 0.2rem;
        transform: scale(0.5, 0.5);
        transform-origin: center top;
    }
}
</style>