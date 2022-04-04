import Vue from 'vue'
import App from './App.vue'
import store from './store'
import moment from "moment";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ItemData from './model/ItemData'
import Category from './model/CateEnum'

Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.filter("formatDate", (value: number) => {
  if (!value) return "";
  return moment(value).format("YYYY/MM/DD HH:mm:ss");
});

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

//test
let item1 = new ItemData(1,Category.Study,'第一篇笔记','这是一个vue+ts的项目demo')
console.log({item1});