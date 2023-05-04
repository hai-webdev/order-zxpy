<template>
  <div class="head-container">
    <Banner v-if="sort" :src="sort.pic" :title="sort.def1" :desc="sort.def2" />
    <div class="text" v-html="text"></div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import { mapState } from 'vuex';
export default {
  components:{
    Banner
  },
  props:["text"],
  created(){
    this.$store.dispatch("serve/getSort")
  },
  computed:{
    ...mapState({
      sort: state => state.serve.sort
    })
  },
  data(){
    return{
      webSite: window.webSite
    }
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>