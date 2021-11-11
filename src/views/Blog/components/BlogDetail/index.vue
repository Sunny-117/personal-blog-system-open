<template>
  <div v-if="blog" class="blog-detail-container">
    <h1>{{blog.title}}</h1>
    <div class="aside">
      <span>日期：{{formatDate(blog.createDate)}}</span>
      <span>浏览：{{blog.scanNumber}}</span>
      <a href="#form-data-container">评论：{{blog.commentNumber}}</a>
      <router-link :to="{
        name:'blogCategory',
        params:{
          categoryId:blog.category.id
        }
      }">{{blog.category.name}}</router-link>
    </div>
    <div class="markdown-body"  v-html="blog.htmlContent" ></div>
  </div>
</template>

<script>
import formatDate from "@/utils/formatDate";
import "@/styles/markdown.css";
export default {
  props:{
    blog:{
      type:Object,
      required:true
    }
  },
  methods:{
    formatDate,
  },
}
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
@import "~@/styles/global.less";
.aside{
  font-size: 12px;
  color: @gray;
  span,a{
    margin-right: 15px;
  }
 
}
.markdown-body{
  margin-top: 2em;
}
</style>