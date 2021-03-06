import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //存放数据时的状态
  state: {
    goods:'' //想象成一个容器
  },
  //同步状态
  mutations: {
    storeMsg(state,info){
      state.goods = info 
    }
  },
  //异步状态
  actions: {
  },
  modules: {
  }
})
