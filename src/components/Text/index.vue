<template>
  <div class="text-container">
    <div class="title">{{ title }}</div>
    <div class="desc" v-if="desc">{{ desc }}</div>
  </div>
</template>

<script>
export default {
  props: ["title", "desc"],
};
</script>

<style lang="less" scoped>
.text-container {
  text-align: center;
  background-color: #8eb93c;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px 0;
  .title {
    font-size: 35px;
    font-weight: bold;
  }
  .desc {
    font-size: 20px;
    margin-top: 35px;
  }
}
</style>