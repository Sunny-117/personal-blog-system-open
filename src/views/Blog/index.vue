<template>
  <Layout>
    <BlogList></BlogList>
    <template #right>
      <BlogCategory></BlogCategory>
    </template>
  </Layout>
</template>

<script>
import BlogList from "./components/BlogList";
import Layout from "@/components/Layout";
import BlogCategory from "./components/BlogCategory";
export default {
  components: {
    BlogCategory,
    BlogList,
    Layout,
  },
};
</script>

<style lang="less" scoped>
</style>