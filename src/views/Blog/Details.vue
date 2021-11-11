<template>
  <Layout>
    <template>
      <div class="main-container" ref="mainContainer" v-loading="isLoading">
        <BlogDeail :blog="data" v-if="data"></BlogDeail>
        <BlogComment v-if="!isLoading"></BlogComment>
      </div>
    </template>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data"></BlogTOC>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogDeail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
import BlogComment from "./components/BlogComment";
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";
import mainScroll from "@/mixins/mainScroll";
import siteController from "@/utils/siteController";
export default {
  mixins: [fetchData(), mainScroll("mainContainer")],
  components: {
    Layout,
    BlogDeail,
    BlogTOC,
    BlogComment,
  },
  methods: {
    async fetchData() {
      let resp = await getBlog(this.$route.params.id);
      if(!resp) {
        this.$router.push('/NotFound');
        return;
      }
      if (resp.title) {
        siteController.setRoute(resp.title);
      }
      return resp;
    },
  },

  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style lang="less" scoped>
.main-container {
  height: 100%;
  overflow-y: scroll;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
}
</style>