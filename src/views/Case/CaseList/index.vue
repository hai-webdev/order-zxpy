<template>
  <div class="case-list-container">
    <Head />
    <ul class="case-list">
      <li class="case-item" v-for="(item, i) in pics" :key="i">
        <el-image
        class="img"
          :src="item"
          fit="cover"
          :preview-src-list="pics"
        >
        </el-image>
      </li>
    </ul>
  </div>
</template>

<script>
import Head from "../Head";
import getContent from "@/api/getContent";
export default {
  data() {
    return {
      webSite:window.webSite,
      pics:[]
    };
  },
  async created(){
    const result = await getContent({scode:this.$route.params.id});
    this.pics = result.data.pics && result.data.pics.split(",")
    this.pics = this.pics.map(item => this.webSite + item);
  },
  watch:{
    async "$route"(){
      const result = await getContent({scode:this.$route.params.id});
    this.pics = result.data.pics && result.data.pics.split(",")
    this.pics = this.pics.map(item => this.webSite + item);
    }
  },
  components: {
    Head,
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>