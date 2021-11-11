<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i"  >
      <span @click="handleClick(item)" :class="{ isSelected: item.isSelected }">
        {{ item.name }}
      </span>
      <span :class="{ isSelected: item.isSelected }" class="articleCount">{{
        item.articleCount
      }}</span>
      <!-- 组件递归 -->
      <RightList v-if="item.children" :list="item.children" @selected="handleClick"></RightList>
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isSelected) {
        this.$emit("selected", item);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
.right-list-container {
  padding: 0;
  list-style: none;
  .right-list-container {
    margin-left: 1.5em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    span {
      font-size: 14px;
      &.articleCount {
        color: @gray;
        font-size: 12px;
        margin-left: 1em;
      }
      &.isSelected {
        color: @warn;
        font-weight: bold;
      }
    }
  }
}
</style>