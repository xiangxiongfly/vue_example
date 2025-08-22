// 引入全局插件
import {componentPlugin} from "@/components/index.js";

// 引入全局插件
import {lazyPlugin} from "@/directives/index.js";
import {createPinia} from "pinia";
import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
// 引入全局样式
import "@/styles/common.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(lazyPlugin);
app.use(componentPlugin);
app.mount("#app");
