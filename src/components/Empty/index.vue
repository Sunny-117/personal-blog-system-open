<template>
  <div class="empty-container">
    <Icon type='empty'></Icon>
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
@import "~@/styles/mixin.less";
.empty-container {
    .self-center();
    text-align: center;
    color: @gray;
    .icon-container{
        font-size: 72px;
    }
    p{
        font-size: 20px;
    }
}
</style>
