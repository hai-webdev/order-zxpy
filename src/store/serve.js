import getContent from "@/api/getContent";
import { getScodeInfo } from "@/api/getScode";
const state = {
  data: {},
  sort: {},
};
const mutations = {
  GET_DATA(state, payload) {
    state.data = payload;
  },
  GET_SORT(state, payload) {
    state.sort = payload;
  },
};
const actions = {
  async getData(ctx, id) {
    const result = await getContent({ id });
    if(result){
      ctx.commit("GET_DATA", result.data);
    }
  },
  async getSort(ctx) {
    const result = await getScodeInfo(2);
    ctx.commit("GET_SORT", result.data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
