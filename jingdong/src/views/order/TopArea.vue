<template>
    <div class="top">
        <div class="top__header">
            <div class="back iconfont" @click="handleBack">&#xe6f2;</div>
            确认订单
        </div>
        <div class="top__receiver">
            <div class="top__receiver__title">收货地址</div>
            <div class="top__receiver__address">北京市朝阳区大屯路街道</div>
            <div class="top__receiver__info">
                <span class="top__receiver__info__name">hello（先生）</span>
                <span class="top__receiver__info__phone">18911024266</span>
            </div>
            <div class="top__receiver__icon iconfont">&#xe6f2;</div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "../../assets/styles//vars.scss";

.top {
    position: relative;
    height: 1.96rem;
    background-size: 100% 1.59rem;
    background-image: linear-gradient(0deg, rgba(0, 145, 255, 0.00) 4%, #0091FF 50%);
    background-repeat: no-repeat;

    &__header {
        position: relative;
        padding-top: 0.2rem;
        line-height: 0.24rem;
        color: $bgColor;
        text-align: center;
        font-size: .16rem;

        .back {
            position: absolute;
            left: .18rem;
            font-size: .22rem;
        }
    }

    &__receiver {
        position: absolute;
        left: 0.18rem;
        right: 0.18rem;
        bottom: 0;
        height: 1.11rem;
        background-color: $bgColor;
        border-radius: .04rem;

        &__title {
            line-height: 0.22rem;
            padding: 0.16rem 0 0.14rem 0.16rem;
            font-size: 0.16rem;
            color: $content-fontColor;
        }

        &__address {
            line-height: 0.2rem;
            padding: 0 0.4rem 0 0.16rem;
            font-size: 0.14rem;
            color: $content-fontColor;
        }

        &__info {
            padding: 0.06rem 0 0 0.16rem;

            &__name {
                margin-right: 0.06rem;
                line-height: 0.18rem;
                font-size: 0.12rem;
                color: $medium-fontColor;
            }
        }

        &__icon {
            transform: rotate(180deg);
            position: absolute;
            right: 0.16rem;
            top: 0.5rem;
            color: $medium-fontColor;
            font-size: 0.2rem;
        }
    }
}
</style>