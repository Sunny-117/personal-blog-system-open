<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <router-link
            :to="{
              name: 'Details',
              params: {
                id: item.id,
              },
            }"
          >
            <img v-lazy="item.thumb" :alt="item.title" :title="item.title" />
          </router-link>
        </div>
        <div class="main">
          <router-link
            :to="{
              name: 'Details',
              params: {
                id: item.id,
              },
            }"
          >
            <h2>{{ item.title }}</h2>
          </router-link>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览:{{ item.scanNumber }}</span>
            <span>评论:{{ item.commentNumber }}</span>
            <router-link
              :to="{
                name: 'blogCategory',
                params: {
                  categoryId: item.category.id,
                },
              }"
              >{{ item.category.name }}</router-link
            >
          </div>
          <div class="desc">
            <p>{{ item.description }}</p>
          </div>
        </div>
      </li>
    </ul>
    <Empty v-if="data.rows.length == 0 && !isLoading"></Empty>
    <Pager
      v-if="data.rows.length > 0"
      :total="data.total"
      :current="routeInfo.page"
      :limit="routeInfo.limit"
      @changePage="handleChangePage"
    ></Pager>
  </div>
</template>

<script>
import { getBlogs } from "@/api/blog.js";
import fetchData from "@/mixins/fetchData";
import Pager from "@/components/Pager";
import formatDate from "@/utils/formatDate";
import mainScroll from "@/mixins/mainScroll";
import Empty from "@/components/Empty";
// 整个过程对的了逻辑就是：地址栏会影响计算属性routeInfo的信息，计算属性又会影响fetchData获取远程数据，同时计算属性又给翻页组件的属性提供了数据
//而翻页又会影响地址栏的信息，地址栏信息以便watch配置中的$route就会立马重新远程获取地址栏的对应的数据，页面的内容对应产生变化

export default {
  mixins: [fetchData({total:0, rows:[]}), mainScroll("container")],
  components: {
    Pager,
    Empty,
  },
  computed: {
    routeInfo() {
      //路由信息
      const categoryId = +this.$route.params.categoryId || -1; //分类id
      const page = +this.$route.query.page || 1; //当前页
      const limit = +this.$route.query.limit || 10; //每页限制多少条数据
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
  //   created() {
  //       console.log(this.routeInfo);
  //   },
  methods: {
    async fetchData() {
      return await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      );
    },
    formatDate,
    handleChangePage(newPage) {
      //实现点击翻页时，地址栏会跟着改变
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      if (this.routeInfo.categoryId == -1) {
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
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
  },
  watch: {
    //这样写相当于this.$route, 比如监测data的数据变化，则可以写data()
    async $route() {
      //监测到路由信息一旦改变，就重新获取一次数据
      this.isLoading = true;
      this.$refs.container.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
@import "~@/styles/global.less";
.blog-list-container {
  width: 100%;
  height: 100%;
  padding: 25px;
  box-sizing: border-box;
  overflow-y: scroll;
  scroll-behavior: smooth;
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      padding: 15px 0;
      display: flex;
      border-bottom: 1px solid @gray;
    }
  }
}
.thumb {
  flex: 0 0 auto;
  margin-right: 15px;
  img {
    display: block;
    max-width: 200px;
    border-radius: 5px;
  }
}
.main {
  flex: 1 1 auto;
  h2 {
    margin: 7px 0;
    color: @words;
  }
  .aside {
    color: @gray;
    font-size: 12px;
    span {
      display: inline-block;
      margin-right: 15px;
    }
    a {
      color: @gray;
    }
  }
  .desc {
    margin-right: 15px 0;
    font-size: 14px;
  }
}
</style>

