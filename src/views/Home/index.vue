<template>
  <div
    v-loading="isLoading"
    class="home-container"
    ref="container"
    @wheel="handleWheel"
  >
    <ul
      class="carousel-container"
      :style="{
        marginTop,
      }"
      @transitionend="handleTransition"
    >
      <li v-for="banner in data" :key="banner.id">
        <CarouselItem :carousel="banner"></CarouselItem>
      </li>
    </ul>
    <div class="icon icon-up" @click="switchTo(index - 1)" v-show="index >= 1">
      <Icon type="arrowUp"></Icon>
    </div>
    <div
      class="icon icon-down"
      @click="switchTo(index + 1)"
      v-show="index < data.length - 1"
    >
      <Icon type="arrowDown"></Icon>
    </div>
    <ul class="indicator">
      <li
        v-for="(banner, i) in data"
        :key="banner.id"
        @click="switchTo(i)"
        :class="{
          active: i == index,
        }"
      ></li>
    </ul>
    <!-- <Loading v-if="isLoading"></Loading> -->
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem";
import Icon from "@/components/Icon";
import { mapState } from "vuex";
// import Loading from "@/components/Loading";
export default {
  components: {
    CarouselItem,
    Icon,
    // Loading
  },
  data() {
    return {
      //banners: [],   //获取服务器请求的数据
      index: 0, //当前轮播的图片序号
      containerHeight: 0, //放图片容器的高度
      switching: false, //当前是否正在通过滚动滑轮来切换图片
      //isLoading: true, //服务器请求的东西是否加载完毕
    };
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  methods: {
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      if (this.switching) {
        return;
      }
      if (e.deltaY > 5) {
        if (this.index < this.data.length - 1) {
          this.index++;
          this.switching = true;
        }
      } else if (e.deltaY < -5) {
        if (this.index > 0) {
          this.index--;
          this.switching = true;
        }
      }
    },
    handleTransition() {
      this.switching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
    isLoading() {
      return this.$store.state.banner.loading;
    },
    ...mapState('banner',['data'])
  },
  created() {
    this.$store.dispatch("banner/fetchBanner");
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  // async created() {
  //   this.banners = await getBanners();
  //   this.isLoading = false;
  // },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/color.less";
.home-container {
  width: 100%;
  height: 100%;
  // margin: 0 auto;
  position: relative;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
.carousel-container {
  width: 100%;
  height: 100%;
  transition: 0.8s;
  position: absolute;
  left: 0;
  top: 0;
  li {
    width: 100%;
    height: 100%;
  }
}
.icon {
  .self-center();
  transform: translateX(-50%);
  font-size: 30px;
  color: @gray;
  cursor: pointer;
  z-index: 10;
  &-up {
    top: 25px;
    animation: moving 2s infinite alternate;
  }
  &-down {
    top: auto;
    bottom: 25px;
    animation: moving 2s infinite alternate;
  }
  @keyframes moving {
    0% {
      transform: translateX(-50%);
    }
    50% {
      transform: translate(-50%, 10px);
    }
    100% {
      transform: translate(-50%, -10px);
    }
  }
}

.indicator {
  .self-center();
  left: auto;
  transform: translateY(-50%);
  right: 20px;
  z-index: 10;
  li {
    width: 7px;
    height: 7px;
    border: 1px solid @white;
    border-radius: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    &.active {
      background: @white;
    }
  }
}
</style>