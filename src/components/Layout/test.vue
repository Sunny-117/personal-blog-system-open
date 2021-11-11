<template>
  <div class="test-container">
    <Layout>
      <template v-slot:left>
        <div class="left"></div>
      </template>

      <template>
        <div class="main"></div>
      </template>

      <template  #right>
        <div class="right"></div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
  components: {
    Layout,
  },
};
</script>

<style scoped lang="less">
.test-container {
  width: 800px;
  height: 500px;
  margin: 0 auto;
  border: 1px solid;
  .left {
    width: 200px;
    height: 100%;
    background-color: green;
  }
  .main {
    width: 100%;
    height: 100%;
    background-color: yellow;
  }
  .right {
    width: 150px;
    height: 100%;
    background-color: tomato;
  }
}
</style>