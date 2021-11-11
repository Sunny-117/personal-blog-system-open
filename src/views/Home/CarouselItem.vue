<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-img" ref="image" :style="imagePosition">
      <ImageLoader
        :placeholder="carousel.midImg"
        :src="carousel.bigImg"
        @loaded="showWords"
      ></ImageLoader>
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["carousel"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null, //图片容器的宽高
      imageSize: null, //图片的宽高
      mouseX: 0, //鼠标相对图片容器的横坐标
      mouseY: 0, //鼠标相对图片容器的纵坐标
    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  methods: {
    showWords() {  //使标题和描述语有个动画的效果
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.title.clientWidth; //强制渲染一遍
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      this.$refs.desc.clientWidth; //强制渲染一遍
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    setSize() {
      (this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      }),
        (this.imageSize = {
          width: this.$refs.image.clientWidth,
          height: this.$refs.image.clientHeight,
        });
    },
    handleMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.$refs.image.style.transition = '0s';
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleMouseLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
      this.$refs.image.style.transition = '0.2s';
    }
  },
  computed: {
    imagePosition() {
      if (!this.imageSize || !this.containerSize) {
        return;
      }
      const extraWidth = this.imageSize.width - this.containerSize.width; //图片超出容器宽度
      const extraHeight = this.imageSize.height - this.containerSize.height; //图片超出容器的高度
      const disX = (-extraWidth / this.containerSize.width) * this.mouseX;
      const disY = (-extraHeight / this.containerSize.height) * this.mouseY;
      return {
        transform: `translate(${disX}px,${disY}px)`,
      };
    },
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
@import "~@/styles/mixin.less";
.carousel-item-container {
  width: 100%;
  height: 100%;
  color: @white;
  position: relative;
  overflow: hidden;
}
.carousel-img {
  width: 110%;
  height: 110%;
  position: absolute;
}
.title,
.desc {
  position: absolute;
  left: 30px;
  letter-spacing: 3px;
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
  opacity: 0;
  white-space: nowrap;
  overflow: hidden;
}
.title {
  top: calc(50% - 40px);
  font-size: 2em;
}
.desc {
  font-size: 1.2em;
  top: calc(50% + 30px);
}
</style>