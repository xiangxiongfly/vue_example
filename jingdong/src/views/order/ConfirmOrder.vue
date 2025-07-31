<template>
    <div class="wrapper">
        <TopArea />
        <ProductList />
        <SubmitOrder />
    </div>
</template>

<script>
import TopArea from "./TopArea.vue"
import ProductList from "./ProductList.vue"
import SubmitOrder from "./SubmitOrder.vue"

export default {
    name: "ConfirmOrder",
    components: {
        TopArea, ProductList, SubmitOrder
    }
}

</script>

<style lang="scss" scoped>
.wrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #eee;
    overflow-y: scroll;
}
</style>