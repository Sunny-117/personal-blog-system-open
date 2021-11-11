<template>
  <div v-show="isShow" @click="handleClick"  class="to-top-container">toTop</div>
</template>

<script>
export default {
    data() {
        return {
            isShow: false
        }
    },
    created() {
        this.$eventBus.$on('mainScroll', this.handleScroll);
    },
    // destroyed() {
    //     this.$eventBus.$off('mainScroll', this.handleScroll)
    // },
    methods:{
        handleScroll(dom) {
            if(!dom) {
                this.isShow = false;
                return;
            }
            this.isShow = dom.scrollTop > 800;
        },
        handleClick() {
            this.$eventBus.$emit('setMainScroll',0);
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
.to-top-container{
    width: 50px;
    height: 50px;
    background: @primary;
    border-radius: 50%;
    position: fixed;
    right: 50px;
    bottom: 25px;
    cursor: pointer;
    line-height: 50px;
    text-align: center;
    color: @white;
}
</style>