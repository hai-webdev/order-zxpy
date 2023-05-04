import getList from "@/api/getList";

const state = {
  data: {},
};
const mutations = {
  GET_DATA(state, payload) {
    state.data = payload;
  },
};
const actions = {
  async getData(ctx,scode) {
    const result = await getList({scode,num:1000});
    ctx.commit("GET_DATA", result.data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
