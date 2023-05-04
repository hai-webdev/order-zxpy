<template>
  <div class="guarantee-container">
    <div class="text">
      <div class="title">{{ data.name }}</div>
      <div class="desc" v-html="data.def1"></div>
      <ContactBtn />
    </div>
    <div class="bg">
      <img :src="webSite + data.pic" />
    </div>
  </div>
</template>

<script>
import ContactBtn from "@/components/ContactBtn";
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("home/getData3");
  },
  computed: {
    ...mapState({
      data: (state) => state.home.data3,
    }),
  },
  data() {
    return {
      webSite: window.webSite,
    };
  },
  components: {
    ContactBtn,
  },
};
</script>

<style lang="less" scoped>
@import "./guarantee.less";
</style>