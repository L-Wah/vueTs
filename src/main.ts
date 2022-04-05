import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import i18n from './locales';

import ItemData from './model/ItemData'
import Category from './model/CateEnum'
import ActionHelper from './store/ActionHelper';

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

//test
// let item1 = new ItemData(1,Category.Study,'第一篇笔记','这是一个vue+ts的项目demo')
// console.log({item1});

let ah = new ActionHelper();
// 测试新增
// let newItem = new ItemData(3,Category.Life,'单手开法拉利','吹牛~');
// ah.add(newItem);
// 测试修改
// let editItem = new ItemData(2,Category.Life,'单手开宝马','真实~');
// ah.edit(editItem)
// 测试删除
// ah.removed(3)
console.log(ah.memoList);