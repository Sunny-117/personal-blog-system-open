<template>
  <div class="test-container">
      <Menu></Menu>
  </div>
</template>

<script>
import Menu from "./";
export default {
    components: {
        Menu,
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/color.less";
.test-container{
    width: 300px;
    height: 600px;
    border: 1px solid;
    background-color: @dark;
}
</style>