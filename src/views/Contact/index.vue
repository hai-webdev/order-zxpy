<template>
  <div class="contact-container">
    <Banner :src="sort.pic" :title="sort.def1" :desc="sort.def2" />
    <div class="main-box">
        <div class="contact-box">
      <div class="left-layout">
        <div class="title">免費報價</div>
        <div class="cont" v-html="contact.content"></div>
        <ContactBtn />
      </div>
      <div class="right-layout">
        <div class="form-box">
            <label for="" class="w50 mr">
                <p>稱呼 Name *</p>
                <input type="text" v-model="form.name">
            </label>
            <label for="" class="w50">
                <p>電話 Phone *</p>
                <input type="text" v-model="form.phone">
            </label>
            <label for="">
                <p>公司名稱 Company Name</p>
                <input type="text" v-model="form.company">
            </label>
            <label for="">
                <p>電郵 Email *</p>
                <input type="text" v-model="form.Email">
            </label>
            <label for="">
                <p>查詢内容 Enquires</p>
                <textarea name="" id="" cols="30" rows="10" v-model="form.enquires"></textarea>
            </label>
            <button type="button" @click="submit" class="submit">提交</button>
        </div>
      </div>
    </div>
    </div>
    <iframe :src="contact.ext_map_link" frameborder="0" class="map"></iframe>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import ContactBtn from "@/components/ContactBtn"
import postMsg from "@/api/postMsg";
import { mapState } from 'vuex';
export default {
  components: {
    Banner,
    ContactBtn
  },
  data() {
    return {
      webSite:window.webSite,
      form:{
        name:"",
        phone:"",
        company:"",
        Email:"",
        enquires:""
      },
    };
  },
  methods:{
    async submit(){
      if(!this.form.name){
        this.$message({
          type:"error",
          message:"稱呼不能为空"
        })
        return;
      }
      if(!this.form.phone){
        this.$message({
          type:"error",
          message:"電話不能为空"
        })
        return;
      }
      if(!this.form.company){
        this.$message({
          type:"error",
          message:"公司名稱不能为空"
        })
        return;
      }
      if(!this.form.Email){
        this.$message({
          type:"error",
          message:"電郵不能为空"
        })
        return;
      }
      if(!this.form.enquires){
        this.$message({
          type:"error",
          message:"查詢内容不能为空"
        })
        return;
      }
      const result = await postMsg(this.form);
      this.$set(this.form, "name", "");
      this.$set(this.form, "phone", "");
      this.$set(this.form, "company", "");
      this.$set(this.form, "Email", "");
      this.$set(this.form, "enquires", "");
      if(result.total === 1){
        this.$message({
          type:"success",
          message:result.data
        })
      }
    }
  },
  created(){
    this.$store.dispatch("contact/getData", 3)
    this.$store.dispatch("contact/getSort")
  },
  computed:{
    ...mapState({
      contact: state => state.contact.data,
      sort: state => state.contact.sort
    })
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>