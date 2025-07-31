<template>
    <div class="position">
        <span class="iconfont position__icon">&#xe619;</span>
        <span class="position__address">北京市朝阳区三里屯</span>
        <span class="iconfont position__notice">&#xe60b;</span>
    </div>
    <div class="search">
        <span class="iconfont">&#xe62d;</span>
        <span class="search__text">山姆会员商店优惠商品</span>
    </div>
    <div class="banner">
        <img class="banner__img" src="../../assets/images/banner.jpg">
    </div>
    <div class="icons">
        <div class="icons__item" v-for="item in iconsList" :key="item.desc">
            <img class="icons__item__img" :src="require(`../../assets/images/${item.imgName}.png`)" />
            <!-- <img class="icons__item__img" :src="require(`@/assets/images/${item.imgName}.png`)" /> -->
            <p class="icons__item__desc">{{ item.desc }}</p>
        </div>
    </div>
    <div class="line"></div>
</template>

<script>
export default {
    name: "StaticPart",
    setup() {
        const iconsList = [{
            imgName: "超市",
            desc: "超市便利",
        },
        {
            imgName: "菜市场",
            desc: "菜市场",
        },
        {
            imgName: "水果店",
            desc: "水果店",
        },
        {
            imgName: "鲜花",
            desc: "鲜花绿植",
        },
        {
            imgName: "医药健康",
            desc: "医药健康",
        },
        {
            imgName: "家居",
            desc: "家居时尚",
        },
        {
            imgName: "蛋糕",
            desc: "烘培蛋糕",
        },
        {
            imgName: "签到",
            desc: "签到",
        },
        {
            imgName: "大牌免运",
            desc: "大牌免运",
        },
        {
            imgName: "红包",
            desc: "红包套餐",
        }]
        return { iconsList }
    }
}

</script>

<style lang="scss" scoped>
@import "../../assets/styles/vars.scss";
@import "../../assets/styles/mixins.scss";

.position {
    position: relative;
    padding: 0.16rem 0.24rem 0.16rem 0;
    line-height: 0.22rem;
    font-size: 0.16rem;
    color: #333;
    @include ellipsis;

    &__icon {
        position: absolute;
        top: 0.17rem;
        font-size: 0.2rem;
    }

    &__notice {
        position: absolute;
        right: 0;
        font-size: 0.2rem;
    }

    &__address {
        margin-left: 0.32rem;
    }
}

.search {
    margin-bottom: 0.12rem;
    line-height: 0.32rem;
    color: #b7b7b7;
    background-color: #f5f5f5;
    border-radius: 0.16rem;

    .iconfont {
        display: inline-block;
        padding: 0 0.08rem 0 0.16rem;
        font-size: 0.16rem;
    }

    &__text {
        display: inline-block;
        font-size: 0.14rem;
    }
}

.banner {
    height: 0;
    overflow: hidden;
    padding-bottom: 25.4%;

    &__img {
        width: 100%;
    }
}

.icons {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.16rem;

    &__item {
        width: 20%;

        &__img {
            display: block;
            width: 0.4rem;
            height: 0.4rem;
            margin: 0 auto;
        }

        &__desc {
            margin: 0.06rem 0 0.16rem 0;
            text-align: center;
            color: #333;
        }
    }
}

.line {
    margin: 0 -0.18rem;
    height: 0.1rem;
    background-color: $content-bgColor;
}
</style>