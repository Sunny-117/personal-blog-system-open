<template>
  <nav class="menu-container">
    <router-link
      v-for="item in menu"
      :key="item.name"
      :to="{ name: item.name }"
      :exact="item.exact"
    >
      <div class="icon">
        <Icon :type="item.icon"></Icon>
      </div>
      <span>{{ item.title }}</span>
    </router-link>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  data() {
    return {
      menu: [
        {
          name: "home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "blog",
          title: "文章",
          icon: "blog",
          exact: false,
        },
        {
          name: "about",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/color.less";
@import "~@/styles/global.less";
.menu-container {
  list-style: none;
  margin: 20px 0;
  color: @gray;
  padding: 0;
  a {
    display: flex;
    padding: 0 50px;
    align-items: center;
    height: 45px;
    transition: 0.5s;
    &:hover {
      background-color: #2d2d2d;
      color: @white!important;
      font-size: 18px;
    }
    &.router-link-active {
      background-color: #2d2d2d;
    }
    .icon {
      width: 24px;
    }
  }
}
</style>