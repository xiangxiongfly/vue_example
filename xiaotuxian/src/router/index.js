import Category from "@/views/category/Category.vue";
import GoodsDetail from "@/views/detail/GoodsDetail.vue";
import Home from "@/views/home/Home.vue";
import Layout from "@/views/layout/Layout.vue";
import Login from "@/views/login/Login.vue";
import SubCategory from "@/views/subcategory/SubCategory.vue";
import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {path: "", redirect: "/home"},
        {path: "home", component: Home},
        {path: "category/:id", component: Category},
        {path: "category/sub/:id", component: SubCategory},
        {path: "detail/:id", component: GoodsDetail},
      ]
    },
    {
      path: "/login", component: Login
    }
  ]
});

export default router;
