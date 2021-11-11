<template>
  <div>
    <h1>App组件</h1>
    <Avatar url="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2496571732,442429806&fm=26&gp=0.jpg"></Avatar>
    <Avatar url="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3206689113,2237998950&fm=26&gp=0.jpg" :size="150"></Avatar>
  </div>
</template>

<script>
import Avatar from "./";
export default {
  name: "", //如果组件没有在注册的时候指定名字，则使用该名字
  components: {
    Avatar,
  },
};
</script>

