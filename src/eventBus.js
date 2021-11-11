//这是原生的写法
// const listeners = {};
// export default {
//     $on(eventName, handler) {
//         if (!listeners[eventName]) {
//             listeners[eventName] = new Set();
//         }
//         listeners[eventName].add(handler);
//     },
//     $off(eventName, handler) {
//         if (!listeners[eventName]) {
//             return;
//         }
//         listeners[eventName].delete(handler);
//     },
//     $emit(eventName, ...args) {
//         if (!listeners[eventName]) {
//             return;
//         }
//         for (const handler of listeners[eventName]) {
//             handler(...args);
//         }
//     }
// }

//更方便的写法如下：
import Vue from 'vue';
const eventBus = new Vue({})
Vue.prototype.$eventBus = eventBus;
export default eventBus;