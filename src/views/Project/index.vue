<template>
  <div class="project-container" v-loading="loading" ref=container>
    <div class="item" v-for="item in data" :key="item.id">
      <a :href="item.url" target="_blank">
        <img :src="item.thumb" :alt="item.name" v-lazy="item.thumb" />
      </a>
      <div class="info">
        <h2>
          <a :href="item.url">{{ item.name }}</a>
        </h2>
        <a :href="item.github">github</a>
        <p v-for="(des, j) in item.description" :key="j">{{ des }}</p>
      </div>
    </div>
    <Empty v-if="data.length==0 && !loading"></Empty>
  </div>
</template>

<script>
import { mapState } from "vuex";
import mainScroll from "@/mixins/mainScroll";
import Empty from "@/components/Empty";
export default {
  components:{
    Empty
  },
  mixins:[mainScroll('container')],
  computed: {
    ...mapState("project", ["loading", "data"]),
  },
  created() {
    this.$store.dispatch("project/fetchProject");
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
@import "~@/styles/global.less";
.project-container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  position: relative;
  box-sizing: border-box;
  padding: 20px;
  scroll-behavior: smooth;
}
.item {
  display: flex;
  transition: 0.5s;
  padding: 20px;
  margin-bottom: 20px;
  &:hover {
    box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.5);
    transform: scale(1.01) translate(3px, -3px);
  }
  img {
    width: 250px;
    min-height: 150px;
    flex: 0 0 auto;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 15px;
  }
  .info {
    line-height: 1.7;
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .github {
    font-size: 14px;
    color: @primary;
  }
}
</style>