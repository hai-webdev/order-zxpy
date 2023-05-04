<template>
  <div class="banner-container">
    <div class="banner-container">
      <div class="text-box">
        <div class="title">{{ title }}</div>
        <div class="desc">{{ desc }}</div>
      </div>
      <img :src="webSite + src" class="bg" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["src", "title", "desc"],
  data(){
    return {
      webSite:window.webSite
    }
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>