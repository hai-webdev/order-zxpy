<!-- eslint-disable vue/no-unused-components -->
<template>
  <div class="banner-container">
    <Swiper
      ref="mySwiper"
      :options="swiperOptions"
      v-if="slide && slide.length"
    >
      <SwiperSlide
        class="banner-item swiper-slide"
        v-for="(banner, index) in slide"
        :key="index"
      >
        <div class="text">
          <h1 class="animated jello">{{ banner.title }}</h1>
          <h2 class="animated jello">{{ banner.subtitle }}</h2>
        </div>
        <img :src="webSite + banner.pic" />
      </SwiperSlide>
    </Swiper>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { mapState } from 'vuex';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  created(){
    this.$store.dispatch("slide/getData")
  },
  computed:{
    ...mapState({
      slide:state => state.slide.data
    })
  },
  data() {
    return {
      bannerIndex: 0,
      webSite:window.webSite,
      swiperOptions: {
        loop: true,
        effect:"fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
      },
    };
  },
  methods: {
    changeIndex(type) {
      if (type === "-") {
        if (this.bannerIndex === 0) {
          this.bannerIndex = this.banners.length - 1;
        }
        this.bannerIndex--;
      }
      if (type === "+") {
        if (this.bannerIndex === this.banners.length - 1) {
          this.bannerIndex = 0;
        }
        this.bannerIndex++;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "./banner.less";
</style>
