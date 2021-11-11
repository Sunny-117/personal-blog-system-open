<template>
  <div class="message-container" ref="msgContainer">
    <MessageArea
      @clicks="handleClicks"
      title="留言板"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
    ></MessageArea>
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import fetchCommentData from "@/mixins/fetchCommentData";
import * as msgApi from "@/api/message";
import mainScroll from "@/mixins/mainScroll";
export default {
  mixins: [
    mainScroll("msgContainer"),
    fetchData({ total: 0, rows: [] }),
    fetchCommentData(),
  ],
  components: {
    MessageArea,
  },
  methods: {
    async fetchData() {
      const res = await msgApi.getMessage(this.page, this.limit);
      return res;
    },
    async handleClicks(formData, callback) {
      const resp = await msgApi.postMessage(formData);
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("感谢您的留言");
    },
  },
};
</script>

<style scoped>
.message-container {
  width: 100%;
  height: 100%;
  padding: 25px 0;
  box-sizing: border-box;
  overflow-y: scroll;
  scroll-behavior: smooth;
  position: relative;
}
.message-area-container {
  width: 800px;
  margin: 0 auto;
}
</style>
