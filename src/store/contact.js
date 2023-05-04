import getContent from "@/api/getContent";
import {getScodeInfo} from "@/api/getScode";
const state = {
  data: {},
  sort:{}
};
const mutations = {
  GET_DATA(state, payload) {
    state.data = payload;
  },
  GET_SORT(state, payload){
    state.sort = payload
  }
};
const actions = {
  async getData(ctx,scode) {
    const result = await getContent({scode});
    ctx.commit("GET_DATA", result.data);
  },
  async getSort(ctx){
    const result = await getScodeInfo(3);
    ctx.commit("GET_SORT", result.data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
