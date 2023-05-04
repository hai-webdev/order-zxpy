<template>
  <div class="serve-container">
    <div class="serve-box">
      <ServeList :serve="serveList" />
      <div class="serve-text" v-html="text"></div>
      <div class="swiper-box">
        <Swiper ref="mySwiper" :options="swiperOptions">
          <SwiperSlide v-for="(pic, i) in pics" :key="i">
            <el-image class="img" :src="pic" :preview-src-list="pics">
            </el-image>
          </SwiperSlide>
        </Swiper>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
      <ContactBtn />
    </div>
  </div>
</template>

<script>
import ServeList from "@/components/ServeList";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import ContactBtn from "@/components/ContactBtn";
import { mapState } from "vuex";
export default {
  props: ["text"],
  created() {
    this.$store.dispatch("serveList/getData", 13);
    this.$store.dispatch("serve/getData");
  },
  computed: {
    ...mapState({
      serveList: (state) => state.serveList.data,
      pics: (state) => {
        if (state.serve && state.serve.data && state.serve.data.pics) {
          let list = state.serve.data.pics.split(",");
          list = list.map((item) => window.webSite + item);
          return list;
        }
      },
    }),
  },
  data() {
    return {
      swiperOptions: {
        // loop: true,
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
        slidesPerView: 2,
        spaceBetween: 10,
        breakpoints: {
          1440: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      },
    };
  },
  components: {
    ContactBtn,
    Swiper,
    SwiperSlide,
    ServeList,
  },
};
</script>

<style lang="less" scoped>
.serve-container {
  padding: 54px 0;
  background-color: #f1f9eb;
  .serve-box {
    .serve-text {
      width: 90%;
      margin: 0 auto 50px;
      max-width: 980px;
    }
    .swiper-box {
      width: 90%;
      margin: 0 auto;
      max-width: 1440px;
      position: relative;
    }
  }
}
.swiper-box .swiper-slide {
  position: relative;
}
.swiper-box .swiper-slide::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0;
  z-index: 2;
  transform-origin: bottom center;
  transform: scaleY(0);
  transition: 0.3s;
}
.swiper-box .swiper-slide:hover::after {
  transform: scaleY(1);
  opacity: 0.3;
}
.swiper-box .swiper-slide .img {
  width: 100%;
  border-radius: 30px;
}
.contact-btn-container {
  padding-top: 50px;
}
</style>