<template>
  <header class="header-container">
    <div class="top-text">{{label.dw}}</div>
    <div class="head-box max-center">
      <router-link to="/" class="logo">
        <img :src="webSite + site.logo" />
      </router-link>
      <div class="nav-box">
        <ul class="nav-list">
          <li class="nav-item" v-for="n in nav" :key="n.id">
            <router-link :to="{
              path: '/' + n.filename
            }">{{n.name}}</router-link>
            <dl class="nav-sublist" v-if="n.son">
              <dd class="nav-subitem" v-for="sub in n.son" :key="sub.id">
                <router-link :to="{
                  path: '/' + n.filename + '/' + sub.scode
                }">{{sub.name}}</router-link>
              </dd>
            </dl>
          </li>
        </ul>
        <div class="bottom-text">{{label.top}}</div>
      </div>
      <ul class="icon-list">
        <li class="icon-item">
          <a :href="label.WhatsApplj" target="_blank">
            <img :src="icon1" />
          </a>
        </li>
        <li class="icon-item">
          <a :href="label.facebook" target="_blank">
            <img :src="icon2" />
          </a>
        </li>
        <li class="icon-item">
          <a :href="label.youtube" target="_blank">
            <img :src="icon3" />
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>

import icon1 from "@/assets/images/icon/icon-whatsapp.webp";
import icon2 from "@/assets/images/icon/icon-facebook.webp";
import icon3 from "@/assets/images/icon/icon-youtube.webp";
import { mapState } from "vuex";
export default {
  data() {
    return {
      icon1,
      icon2,
      icon3,
      webSite:window.webSite
    };
  },
  created(){
    this.$store.dispatch("site/getData");
    this.$store.dispatch("label/getData");
    this.$store.dispatch("nav/getData");
  },
  computed:{
    ...mapState({
      site: state => state.site.data,
      label: state => state.label.data,
      nav: state => state.nav.data,
    })
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>