<template>
  <div class="avatar-container">
    <img
      :src="url"
      :style="{
        width: size + 'px',
        height: size + 'px',
      }"
    />
  </div>
</template>

<script >
export default {
  props: {
    url: {
      type: String, //url属性必须是字符串
      required: true, //属性必传
    },
    size: {
      type: Number,
      default: 150, //默认size为150
    },
  },
};
</script>

<style scoped>
/*scoped属性限制了样式的作用域*/
.avatar-container{
  display: flex;
  justify-content: center;
}
.avatar-container img {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>