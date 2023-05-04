<template>
  <div class="about-container">
    <h1>{{ about.sortname }}</h1>
    <div class="about-box">
      <div class="img">
        <img :src="webSite + about.ico" alt="" />
      </div>
      <div class="text-box">
        <div class="text">
          <div class="company">{{ about.title }}</div>
          <div class="desc">{{ about.ext_wb }}</div>
          <div class="note" v-html="about.ext_wb2"></div>
        </div>
      </div>
    </div>
    <div class="about-text" v-html="about.content"></div>
    <TextComp :title="serve.title" :desc="serve.ext_wb" />
    <ServeList :serve="serveList" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Text from "@/components/Text";
import ServeList from "@/components/ServeList";
export default {
  data() {
    return {
      webSite: window.webSite,
    };
  },
  created() {
    this.$store.dispatch("about/getData", 1);
    this.$store.dispatch("serve/getData", 20);
    this.$store.dispatch("serveList/getData", 13);
  },
  computed: {
    ...mapState({
      about: (state) => state.about.data,
      serve: (state) => state.serve.data,
      serveList: (state) => state.serveList.data,
    }),
  },
  components: {
    TextComp: Text,
    ServeList,
  },
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>