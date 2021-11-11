<template>
<div class="test-container">
    <Loading v-if="isLoading"></Loading>
    <button @click="isLoading=!isLoading">点击切换</button>
</div>

</template>

<script>
import Loading from "./";
export default {
    data() {
        return {
            isLoading:true,
        }
    },
  components: {
    Loading,
  },
};
</script>

<style>
</style>