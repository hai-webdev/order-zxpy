<template>
  <div class="contact-btn-container">
    <router-link class="btn gray" to="/contact">免費咨詢報價</router-link>
    <a :href="label.WhatsApplj" class="btn">即時WhatsApp</a>
    <div class="tel">免費報價 {{label.WhatsApp}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  created(){
    this.$store.dispatch("label/getData")
  },
  computed:{
    ...mapState({
      label: state => state.label.data
    })
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.contact-btn-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 45px;
  .btn {
    width: 144px;
    height: 44px;
    color: #fff;
    border-radius: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    background-color: @mainColor;
    transition: .6s;
    margin-bottom: 6px;
    border:1px solid @mainColor;
    &:hover {
      background-color: #656565;
      border: 1px solid #000;
    }
    &.gray {
      background-color: #656565;
      border:1px solid #000;
      &:hover {
        border: 1px solid #000;
        background-color: @mainColor;
      }
    }
  }
  .tel {
    font-size: 20px;
    color: @mainColor;
    font-weight: bold;
  }
}
</style>