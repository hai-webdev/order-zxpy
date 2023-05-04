<template>
  <div class="case-container">
    <Head :text="serve.content" />
    <ServeList :serve="serveList" />
    <ul class="case-list">
      <li class="case-item" v-for="item in caseList" :key="item.id">
        <img :src="webSite + item.pic" class="bg" />
        <router-link :to="{
          path:'/case/' + item.scode
        }" class="more">
            <span>{{item.name}}</span>
          <svg
            data-bbox="10.725 10.725 178.55 178.55"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 200 200"
            data-type="shape"
          >
            <g>
              <path
                d="M100 25.604c41.022 0 74.396 33.374 74.396 74.396S141.022 174.396 100 174.396 25.604 141.022 25.604 100 58.978 25.604 100 25.604zm0-14.879c-49.302 0-89.275 39.973-89.275 89.275S50.698 189.275 100 189.275s89.275-39.973 89.275-89.275S149.302 10.725 100 10.725zM77.681 137.198V62.802l66.956 38.284-66.956 36.112z"
              ></path>
            </g>
          </svg>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import getNav from "@/api/getNav";
import ServeList from "@/components/ServeList";
import Head from "./Head";
import { mapState } from 'vuex';
export default {
  components: {
    ServeList,
    Head,
  },
  async created(){
    this.$store.dispatch("serveList/getData", 13);
    this.$store.dispatch("serve/getData", 2);
    this.caseList = await (await getNav(2)).data;
  },
  computed:{
    ...mapState({
      serveList: state => state.serveList.data,
      serve: state => state.serve.data
    })
  },
  data() {
    return {
      webSite:window.webSite,
      caseList:[]
    };
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>