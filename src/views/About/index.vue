<template>
  <div class="about-container" v-loading="loading || !urlLoaded">
    <iframe
      @load="urlLoaded = true"
      :src="resumeUrl"
      class="about-content"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      urlLoaded: false,
      resumeUrl: "./static/myResume.html",
    };
  },
  created() {
    this.$store.dispatch("about/fetchAbout");
  },
  computed: mapState("about", {
    src: "data",
    loading: "loading",
  }),
};
</script>

<style>
.about-container {
  width: 100%;
  height: 100%;
  position: relative;
}
.about-content {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}
</style>