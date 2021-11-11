<template>
  <div class="blog-comment-container">
    <MessageArea
      @clicks="handleClicks"
      title="评论列表"
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
import { getComment, postComments } from "@/api/blog";
export default {
  mixins: [fetchData({ total: 0, rows: [] }), fetchCommentData()],
  components: {
    MessageArea,
  },
  methods: {
    async fetchData() {
      const res = await getComment(
        this.$route.params.id,
        this.page,
        this.limit
      );
      return res;
    },
    async handleClicks(formData, callback) {
      const resp = await postComments({
        blogId: this.$route.params.id,
        ...formData,
      });
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("评论成功");
    },
  },
};
</script>

<style lang="less" scoped>
.blog-comment-container {
  margin-top: 30px;
}
</style>