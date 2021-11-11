<template>
  <img class="loading" :src="LoadingUrl" alt="">
</template>

<script>
import LoadingUrl from "@/assets/loading.svg";
export default {
    data() {
        return {
            LoadingUrl,
        };
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.loading{
    .self-center();
}
</style>