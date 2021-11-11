<template>
  <div class="test-container">
      <Contact></Contact>
  </div>
</template>

<script>
import Contact from "./";
export default {
    components:{
        Contact,
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
.test-container{
    width: 300px;
    height: 600px;
    background-color: @dark;
    margin: 10px auto;
    padding-top: 200px;
    box-sizing: border-box;
}
</style>