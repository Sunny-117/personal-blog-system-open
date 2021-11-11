<template>
  <div class="test-container">
    <Empty  class="iconfont"></Empty>
  </div>
</template>

<script>
import Empty from "./";
export default {
  data() {
    return {
      message: "当前无评论",
    };
  },
  components: {
    Empty,
  },
};
</script>

<style scoped>
.test-container {
  width: 500px;
  height: 400px;
  border: 1px solid;
  position:relative;
}
</style>
