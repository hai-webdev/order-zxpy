import Vue from 'vue'
import Vuex from 'vuex'
import site from "./site";
import label from "./label";
import nav from "./nav";
import slide from "./slide";
import about from "./about";
import serve from "./serve";
import serveList from "./serveList";
import contact from "./contact";
import home from "./home";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    site,
    label,
    nav,
    slide,
    about,
    serve,
    serveList,
    contact,
    home
  }
})
