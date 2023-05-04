import getContent from "@/api/getContent";
import getList from "@/api/getList";
import {getScodeInfo} from "@/api/getScode";

const state = {
  data1: {},
  data2: [],
  data2Title:{},
  data3:{},
  data4:{},
  data4Info:[]
};
const mutations = {
  GET_DATA1(state, payload) {
    state.data1 = payload;
  },
  GET_DATA2(state, payload) {
    state.data2 = payload;
  },
  GET_DATA2TITLE(state, payload) {
    state.data2Title = payload;
  },
  GET_DATA3(state, payload) {
    state.data3 = payload;
  },
  GET_DATA4(state, payload) {
    state.data4 = payload;
  },
  GET_DATA4INFO(state, payload) {
    state.data4Info = payload;
  },
};
const actions = {
  async getData1(ctx) {
    const result = await getContent({scode:8});
    if(result.total){
      ctx.commit("GET_DATA1", result.data);
    }
  },
  async getData2(ctx) {
    const result = await getList({scode:9});
    if(result.total){
      ctx.commit("GET_DATA2", result.data);
    }
  },
  async getData2Title(ctx) {
    const result = await getScodeInfo(9);
    if(result.total){
      ctx.commit("GET_DATA2TITLE", result.data);
    }
  },
  async getData3(ctx) {
    const result = await getScodeInfo(10);
    if(result.total){
      ctx.commit("GET_DATA3", result.data);
    }
  },
  async getData4(ctx) {
    const result = await getScodeInfo(11);
    if(result.total){
      ctx.commit("GET_DATA4", result.data);
    }
  },
  async getData4Info(ctx) {
    const result = await getList({scode:11});
    if(result.total){
      ctx.commit("GET_DATA4INFO", result.data);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
