<template>
  <div class="serve-container">
    <TextComp
      :title="serve.title"
      :desc="serve.ext_wb"
    />
    <Serve :text="serve.content" />
  </div>
</template>

<script>
import Text from "@/components/Text";
import Serve from "./Components/Serve";
import { mapState } from 'vuex';
export default {
  components: {
    Serve,
    TextComp: Text,
  },
  created(){
    this.$store.dispatch("serve/getData", 20);
  },
  computed:{
    ...mapState({
      serve:state => state.serve.data
    })
  },
  data(){
    return {
      serveText:"由資深搭棚師傅監工，確保棚架安全穩健. 每一位員工均受過專業的訓練,及工程團隊亦獲政府認可專業資格、牌照和保險，本公司亦會定期進行安全評核和訓練,確保所有棚架及工具之安全。"
    }
  },
};
</script>

<style scoped>
@import "./index.less";
</style>