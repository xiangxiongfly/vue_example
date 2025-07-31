import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    alias: "/home",
    component: () => import(/* webpackChunkName: "home" */ "../views/home/Home.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import(/* webpackChunkName: "register" */ "../views/register/Register.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ "../views/login/Login.vue"),
  },
  {
    path: "/shop/:id/:name/:imgUrl/:sales/:expressPrice/:slogan",
    name: "shop",
    component: () => import(/* webpackChunkName: "shop" */ "../views/shop/Shop.vue"),
  },
  {
    path: "/confirmOrder/:id",
    name: "confirmOrder",
    component: () => import(/* webpackChunkName: "shop" */ "../views/order/ConfirmOrder.vue"),
  },
  {
    path: "/myOrder",
    name: "myOrder",
    component: () => import(/* webpackChunkName: "shop" */ "../views/myorder/MyOrder.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
