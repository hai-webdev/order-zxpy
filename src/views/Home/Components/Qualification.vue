<template>
  <div class="qualification-container">
    <div class="title-box">
      <div class="title">{{ dataTitle.name }}</div>
      <div class="entitle">{{ dataTitle.subname }}</div>
    </div>
    <ul class="list">
      <li class="item" v-for="item in data" :key="item.id">
        <div class="img">
          <img :src="webSite + item.ico" :alt="item.title" />
        </div>
        <p>{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      webSite: window.webSite,
    };
  },
  created() {
    this.$store.dispatch("home/getData2");
    this.$store.dispatch("home/getData2Title");
  },
  computed: {
    ...mapState({
      data: (state) => state.home.data2,
      dataTitle: (state) => state.home.data2Title,
    }),
  },
};
</script>

<style lang="less" scoped>
@import "./qualification.less";
</style>