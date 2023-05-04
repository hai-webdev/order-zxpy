import getSlide from "@/api/getSlide";

const state = {
  data: {},
};
const mutations = {
  GET_DATA(state, payload) {
    state.data = payload;
  },
};
const actions = {
  async getData(ctx, id) {
    const result = await getSlide(id);
    ctx.commit("GET_DATA", result.data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
