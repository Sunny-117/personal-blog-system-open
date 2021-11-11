<template>
  <div class="image-loader-container">
    <img class="palce" :src="placeholder" v-if="!everythingDone" />
    <img
      :src="src"
      :style="{ opacity: originOpacity, transition: `${duration}ms` }"
      @load="loadDone "
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {  //原图地址
      type: String,
      required: true,
    },
    placeholder: {//占位图地址
      type: String,
      required: true,
    },
    duration: {  //模糊到清晰的过渡时间
      type: Number,
      default: 2000,
    },
  },
  data() {
    return {
      isLoaded: false, //原图是否加载完成
      everythingDone: false, //
    };
  },
  computed: {
    originOpacity() {   //如果图片加载完成，则透明度为1
      return this.isLoaded ? 1 : 0;
    },
  },
  methods: {
    loadDone() {
      this.isLoaded = true;
      setTimeout(()=> {
          this.everythingDone = true;
          this.$emit("loaded");
      },this.duration)
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
    &.palce {
      filter: blur(2vw);
    }
  }
}
</style>