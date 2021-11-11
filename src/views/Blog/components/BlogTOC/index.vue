<template>
  <div class="blog-toc-container">
    <h1>目录</h1>
    <RightList
      :list="toWithSelect"
      @selected="handleSelected"
      v-if="toc"
    ></RightList>
  </div>
</template>

<script>
import RightList from "../RightList";
import debounce from "@/utils/debounce";
export default {
  props: {
    toc: {
      type: Array,
      required: true,
    },
  },
  components: {
    RightList,
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  computed: {
    toWithSelect() {
      //在toc数组的每一项中加上一个isSelected属性，通过这个isSelected属性来判断当前哪个toc是被选中
      const getNewToc = (toc = []) => {
        return toc.map((item) => {
          return {
            ...item,
            isSelected: item.anchor == this.activeAnchor,
            children: getNewToc(item.children),
          };
        });
      };
      return getNewToc(this.toc);
    },
    getDoms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const item of toc) {
          const dom = document.getElementById(item.anchor);
          doms.push(dom);
          if (item.children) {
            addToDoms(item.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
  methods: {
    debounce,
    handleSelected(item) {
      location.hash = item.anchor;
    },
    setSelect(scrollDom) {
      if (!scrollDom) {
        return;
      }
      if (scrollDom.scrollTop == 0) {
        this.activeAnchor = "";
        return;
      }
      const range = 120;
      for (const dom of this.getDoms) {
        const top = dom.getBoundingClientRect().top;
        if (top > range) {
          return;
        } else {
          this.activeAnchor = dom.id;
        }
      }
    },
  },
  created() {
    this.setSelects = this.debounce(this.setSelect, 50);
    this.$eventBus.$on("mainScroll", this.setSelects);
  },
  destroyed() {
    this.$eventBus.$off("mainScroll", this.setSelects);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
.blog-toc-container {
  h1 {
    margin: 0;
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 2px;
  }
}
</style>