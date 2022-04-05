import Vue from 'vue'
import Vuex from 'vuex'
import ActionHelper from './ActionHelper';

Vue.use(Vuex)

export default new Vuex.Store({
  // 共享对象和数据
  state: {
    aHelper:new ActionHelper(),
    isShow:false, //控制显示编辑框
    transMemo:null, //数据副本
    filterCateId: -1, // 筛选分类
  },
  // 共享方法
  mutations: {
    showEditMemo(state:any,editMemo:any){
      state.transMemo = editMemo;
      // 显示编辑框
      state.isShow = true;
    }
  },
  // actions: {
  // },
  // modules: {
  // }
}) 
