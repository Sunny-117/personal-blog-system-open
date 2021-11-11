//入口文件
import Vue from 'vue';
import App from './App';
import router from "@/router";
import store from "@/store";
import "@/api";



import showMessage from '@/utils/showMessage';
Vue.prototype.$showMessage = showMessage;

import vloading from '@/directives/loading';
Vue.directive('loading', vloading);

import vlazy from "@/directives/lazy";
Vue.directive('lazy', vlazy);

//事件总线
import "./eventBus";


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
//测试事件总线
// import eventBus from "./eventBus";
// window.$eventBus = eventBus;

// function handler1(args) {
//     console.log('我是handler1' + args);
// }

// function handler2(args) {
//     console.log('我是handler2' + args)
// }
// window.handler1 = handler1;
// window.handler2 = handler2;
// $eventBus.$on('event1', handler1)
// $eventBus.$on('event1', handler2);
// $eventBus.$on('event2', handler2);

//测试mock模仿的数据
// import * as blog from '@/api/blog';
// const resp = blog.getBlogs(10, 100, -1);
// console.log(resp);

// import * as blog from "@/api/blog";
// blog.getBlog(1).then(res => console.log(res));


// blog.postComments({
//     nickname: '昵称',
//     content: '评论内容，纯文本',
//     blogId: 123
// }).then(res => console.log(res));

// blog.getComment('123').then(res => console.log(res));

// import store from "@/testV/vuex/index.js";  //测试vuex
// import testVuex from "@/testV/vuex/index.vue";