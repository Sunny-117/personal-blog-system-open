<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h1>文章分类</h1>
    <RightList :list="list" @selected="handleSelected"></RightList>
  </div>
</template>

<script>
//整个过程的逻辑是：地址栏的信息会影响计算属性的categoryId，categoryId会使对应的list中的isSelected为true，会影响RightList组件的状态
//RightList一改变就会导致地址栏的信息重新发生改变，因此又重新改变了计算属性，页面的内容又重新更新。

import RightList from "../RightList";
import { getBlogCategories } from "@/api/blog";
import fetchData from "@/mixins/fetchData";
export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    list() {
      const allArticleCount = this.data.reduce((a, b) => a + b.articleCount, 0);   //算出全部分类总共有多少篇文章
      const allResult = [
        {
          id: -1,
          name: "全部",
          articleCount: allArticleCount,
        },
        ...this.data,
      ];
      return allResult.map((item) => {   //数组的每个对象加上一个isSelected属性，来判断当前分类是否是激活状态
        return { ...item, isSelected: item.id == this.categoryId,articleCount: item.articleCount+'篇' };
      });
    },
  },
  methods: {
    async fetchData() {
      return await getBlogCategories();
    },
    handleSelected(item) {
      const query = {
        page: 1,
        limit: this.$route.query.limit,
      };
      if (item.categoryId == -1) {
        ///    /blog?page=10&limit=5,这种形式
        this.$router.push({
          name: "blog",
          query,
        });
      } else {
        ///    /blog/cate/1?page=10&limit=5,这种形式
        this.$router.push({
          name: "blogCategory",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  border-left: 1px solid #ccc;
  overflow-y: scroll;
  height: 100%;
  position: relative;
  h1 {
    margin: 0;
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 2px;
  }
}
</style>