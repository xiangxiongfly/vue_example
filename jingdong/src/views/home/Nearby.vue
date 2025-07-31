<template>
    <div class="nearby">
        <h3 class="nearby__title">附近店铺</h3>
        <div v-for="item in nearbyList" :key="item._id" @click="handleToShop(item)">
            <ShopInfo :item="item" />
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref } from "vue";
import ShopInfo from "../../components/ShopInfo.vue";

const useNearbyListEffect = () => {
    let nearbyList = ref([])
    nearbyList.value = [{
        "_id": "1",
        "name": "沃尔玛1",
        "imgUrl": "http://www.dell-lee.com/imgs/vue3/near.png",
        "sales": 10000,
        "expressLimit": 0,
        "expressPrice": 5,
        "slogan": "VIP尊享满89元减4元运费券"
    },
    {
        "_id": "2",
        "name": "山姆会员商店2",
        "imgUrl": "http://www.dell-lee.com/imgs/vue3/near.png",
        "sales": 2000,
        "expressLimit": 0,
        "expressPrice": 5,
        "slogan": "联合利华洗护满10减5"
    }, {
        "_id": "3",
        "name": "沃尔玛3",
        "imgUrl": "http://www.dell-lee.com/imgs/vue3/near.png",
        "sales": 10000,
        "expressLimit": 0,
        "expressPrice": 5,
        "slogan": "VIP尊享满89元减4元运费券"
    },
    {
        "_id": "4",
        "name": "山姆会员商店4",
        "imgUrl": "http://www.dell-lee.com/imgs/vue3/near.png",
        "sales": 2000,
        "expressLimit": 0,
        "expressPrice": 5,
        "slogan": "联合利华洗护满10减5"
    }]
    return { nearbyList }
}
export default {
    name: "Nearby",
    components: { ShopInfo },
    setup() {
        const router = useRouter()
        function handleToShop(item) {
            router.push({
                name: "shop", params: { ...item, id: item._id }
            })
        }
        const { nearbyList } = useNearbyListEffect()
        return { nearbyList, handleToShop }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/vars.scss";

.nearby {
    &__title {
        margin: 0.16rem 0 0.02rem 0;
        font-size: 0.18rem;
        font-weight: normal;
        color: $content-fontColor;
    }
}
</style>