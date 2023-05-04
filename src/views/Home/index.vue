<template>
  <div class="home-container">
    <Banner />
    <TextComp :title="label.banner_text" />
    <About />
    <ServeComp />
    <Qualification />
    <Guarantee />
    <Quotation />
  </div>
</template>

<script>
import Banner from "./Components/Banner.vue";
import About from "./Components/About.vue";
import Text from "@/components/Text";
import ServeComp from "@/components/ServeComp";
import Qualification from "./Components/Qualification";
import Guarantee from "./Components/Guarantee";
import Quotation from "./Components/Quotation";
import { mapState } from "vuex";
export default {
  data() {
    return {
      loading: true,
    };
  },
  components: {
    Banner,
    About,
    TextComp: Text,
    Qualification,
    Guarantee,
    Quotation,
    ServeComp,
  },
  async created() {
    this.$store.dispatch("label/getData");
  },
  computed: {
    ...mapState({
      label: (state) => state.label.data,
    }),
  },
  methods: {
    removeLoading() {
      this.loading = !this.loading;
    },
  },
};
</script>

<style scoped>
@import "./index.less";
</style>