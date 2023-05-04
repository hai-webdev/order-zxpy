<template>
  <div class="quotation-container">
    <div class="title-box">
      <div class="title">{{ sort.name }}</div>
      <div class="subtitle">{{ sort.subname }}</div>
    </div>
    <ul class="list">
      <li class="item" v-for="(item, i) in list" :key="item.id">
        <div class="title">
          <div class="num">{{ i + 1 }}</div>
          <span>{{ item.title }}</span>
        </div>
        <div class="content" v-html="item.content"></div>
      </li>
    </ul>
    <ContactBtn />
  </div>
</template>

<script>
import ContactBtn from "@/components/ContactBtn";
import { mapState } from "vuex";
export default {
  components: {
    ContactBtn,
  },
  created() {
    this.$store.dispatch("home/getData4");
    this.$store.dispatch("home/getData4Info");
  },
  computed: {
    ...mapState({
      sort: (state) => state.home.data4,
      list: (state) => state.home.data4Info,
    }),
  },
};
</script>

<style lang="less" scoped>
@import "./quotation.less";
</style>