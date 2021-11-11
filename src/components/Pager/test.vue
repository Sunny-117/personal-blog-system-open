<template>
  <div>
    <Pager :current="currentPage" :total="totalData" @changePage="handleChangePage"></Pager>
  </div>
</template>

<script>
import Pager from "./";
export default {
  name: "hh", //如果组件没有在注册的时候指定名字，则使用该名字
  data() {
    return {
      currentPage: 5,
      totalData: 301,
    };
  },
  components: {
    Pager,
  },
  methods: {
    handleChangePage(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.total) {
        newPage = this.total;
      }
      if(newPage == this.current) {
        return ;
      }
      this.currentPage = newPage;
    }
  }
};
</script>
<style scoped>
.iconfont {
  color: red;
  font-size: 14px;
}
</style>

