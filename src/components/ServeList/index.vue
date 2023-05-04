<template>
  <div class="serve-list-container">
    <div class="serve-list">
      <span v-for="(item, index) in serve" :key="index">{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
    props:["serve"]
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>