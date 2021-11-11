<template>
  <div class="pager-container">
      <a @click="handleClick(current-1)" :class="{disabled: current == 1}">|&lt;&lt;</a>
      <a @click="handleClick(1)" :class="{disabled: current == 1}">&lt;&lt;</a>
      <a @click="handleClick(n)" v-for="(n,i) in numbers" :key="i" :class="{active: n==current}">{{n}}</a>
      <a @click="handleClick(totalPage)" :class="{disabled: current == totalPage}">&gt;&gt;</a>
      <a @click="handleClick(current + 1)" :class="{disabled: current == totalPage}">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
    props:{
        current:{  //当前页
            type: Number,  //参数只能为Number类型
            default: 1   //默认为1
        },
        total: {  //总数据量
            type:  Number,
            default: 1,
        },
        limit:{   //页容量
            type: Number,
            default: 10
        },
        visibleNumber: {   //可见页码数
            type: Number,
            default: 10
        }
    },
    computed: {
        totalPage() {  //总页数
            return Math.ceil(this.total / this.limit);
        },
        minPage() {  //可见页码数中的最小页
        let min = this.current - Math.floor(this.visibleNumber / 2);
        if( min < 1) {
            min = 1;
        }
        return min;
        },
        maxPage() {  //可见页码数中的最大页
        let max = this.minPage + this.visibleNumber - 1;
        if (max > this.totalPage) {
            max = this.totalPage;
        }
        return max;
        },
        numbers() {   //当前可见具体页码
            let numbers = [];
            for (let i = this.minPage; i<= this.maxPage; i++) {
                numbers.push(i);
            }
            return numbers;
        }
    },
    methods: {
        handleClick(newPage) {
            this.$emit("changePage", newPage);
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
.pager-container{
    display: flex;
    justify-content: center;
    margin: 20px 0;
    a{
        color: @primary;
        margin: 0 6px;
        cursor: pointer;
        &.disabled{
            color: @lightWords;
            cursor: not-allowed;
        }
        &.active{
            color: @words;
            cursor: text;
        }
    }
}
</style>