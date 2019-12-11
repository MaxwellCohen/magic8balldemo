import Vue from 'vue'
import Vuex from 'vuex'
import magic8ballStore  from './views/components/vuex';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {magic8ball: magic8ballStore}
})
