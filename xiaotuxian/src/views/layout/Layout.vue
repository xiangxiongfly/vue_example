<script setup>
import TopNav from "@/views/layout/components/TopNav.vue";
import Header from "@/views/layout/components/Header.vue";
import Footer from "@/views/layout/components/Footer.vue";
import {onMounted} from "vue";
import {useCategoryStore} from "@/stores/categoryStore";
import StickyHeader from "@/views/layout/components/StickyHeader.vue";

const categoryStore = useCategoryStore();
onMounted(() => {
  categoryStore.getCategoryList();
});
</script>

<template>
  <StickyHeader/>
  <TopNav/>
  <Header/>
  <RouterView/>
  <Footer/>
</template>

<style scoped>

</style>
