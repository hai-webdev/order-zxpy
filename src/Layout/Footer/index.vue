<template>
  <footer class="footer-container">
    <div class="top">
      <ul class="icon-list">
        <li class="icon-item">
          <a :href="label.WhatsApplj">
            <img :src="icon1" alt="" />
          </a>
        </li>
        <li class="icon-item">
          <a :href="label.facebook">
            <img :src="icon2" alt="" />
          </a>
        </li>
        <li class="icon-item">
          <a :href="label.youtube">
            <img :src="icon3" alt="" />
          </a>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <div class="copyright"> {{ site.copyright }}</div>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex";
import icon1 from "@/assets/images/home/icon1.webp";
import icon2 from "@/assets/images/home/icon2.webp";
import icon3 from "@/assets/images/home/icon3.webp";
export default {
  data() {
    return {
      icon1,
      icon2,
      icon3,
    };
  },
  created() {
    this.$store.dispatch("site/getData");
    this.$store.dispatch("label/getData");
  },
  computed: {
    ...mapState({
      site: (state) => state.site.data,
      label: (state) => state.label.data,
    }),
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>