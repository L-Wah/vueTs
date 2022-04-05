import Vue from 'vue'
import Vuex from 'vuex'
import ActionHelper from './ActionHelper';

Vue.use(Vuex)

export default new Vuex.Store({
  // 共享对象和数据
  state: {
    aHelper:new ActionHelper()
  },
  // 共享方法
  mutations: {
    showEditMemo(state){
      
    }
  },
  // actions: {
  // },
  // modules: {
  // }
}) 
