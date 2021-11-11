<template>
  <ul class="form-list-container">
    <li v-for="(item, i) in list" :key="i">
      <Avatar :url="item.avatar" :size="44"></Avatar>
      <div class="message">
        <span class="nick-name">{{ item.nickname }}</span>
        <p class="comment-content">
          {{ item.content }}
        </p>
        <div class="date">
          <span>{{ formatDate(item.createDate, true) }}</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import Avatar from "@/components/Avatar";
import formatDate from "@/utils/formatDate";
export default {
  components: {
    Avatar,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    formatDate,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
ul {
  padding: 0;
  margin: 0;
  list-style: none;
  li {
    display: flex;
    border-bottom: 1px solid darken(@gray, -18%);
    padding: 10px 0;
  }
}
.message {
  margin-left: 15px;
  flex: 1 1 auto;
  position: relative;
  .nick-name {
    color: @success;
  }
  .comment-content {
    margin: 8px 0;
    font-size: 14px;
    color: darken(@words, 20%);
  }
  .date {
    position: absolute;
    right: 0;
    top: 5px;
    font-size: 12px;
    color: @gray;
  }
}
</style>