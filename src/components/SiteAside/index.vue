<template>
  <div v-if="data" class="site-aside-container">
    <Avatar v-if="data.avatar" :url="data.avatar + ''"></Avatar>
    <p>{{ data.siteTitle }}</p>
    <Menu></Menu>
    <Contact></Contact>
  </div>
</template>

<script>
import Contact from "./Contact";
import Menu from "./Menu";
import Avatar from "@/components/Avatar";
import { mapState } from "vuex";
export default {
  components: {
    Contact,
    Menu,
    Avatar,
  },
  created() {
    this.$store.dispatch("setting/fetchSetting");
  },
  computed: {
    ...mapState("setting", ["data"]),
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  padding-top: 10px;
  box-sizing: border-box;
  background-color: @dark;
  p {
    color: @white;
    font-size: 18px;
    text-align: center;
  }
}
</style>