<template>
  <div class="test-container">
    <div class="item" v-for="(t, i) in types" :key="i">
      <Icon :type="t"></Icon>
      <label>{{ t }}</label>
    </div>
  </div>
</template>

<script>
import Icon, { types } from "./";
export default {
  name: "", //如果组件没有在注册的时候指定名字，则使用该名字
  components: {
    Icon,
  },
  data() {
    return {
      types,
    };
  },
};
</script>

<style lang="less" scoped>
@import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
.test-container {
  display: flex;
  justify-content: center;
  margin: 30px auto;
  width: 580px;
  flex-wrap: wrap;
  .item {
    margin: 1em;
    text-align: center;
    cursor: pointer;
    font-size: 1em;
    label{
      display: block;
    }
  }
}
</style>

