import Vue from 'vue';
import VueRouter from "vue-router";
import routes from "./routes";
import siteController from "@/utils/siteController"


Vue.use(VueRouter); //使用一个vue插件
const router = new VueRouter({
    routes,
    mode: "hash" //这是路由匹配模式
})
router.afterEach((to, from) => {
    siteController.setRoute(to.meta.title);
})
export default router;