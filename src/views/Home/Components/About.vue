<template>
  <div class="about-container">
    <div class="about-box">
      <div class="left-layout">
        <div class="logo">
          <img :src="webSite + about.ico" />
        </div>
      </div>
      <div class="right-layout">
        <div class="title" v-html="about.title"></div>
        <div class="en-title" v-html="about.ext_wb"></div>
        <div class="note" v-html="about.content"></div>
      </div>
    </div>
    <ContactBtn />
  </div>
</template>

<script>
import ContactBtn from "@/components/ContactBtn";
import logoImg from "@/assets/images/home/about-logo.webp";
import { mapState } from "vuex";
export default {
  data() {
    return {
      logoImg,
      webSite: window.webSite,
    };
  },
  created() {
    this.$store.dispatch("home/getData1");
  },
  computed: {
    ...mapState({
      about: (state) => state.home.data1,
    }),
  },
  components: {
    ContactBtn,
  },
};
</script>

<style lang="less" scoped>
@import "./about.less";
</style>