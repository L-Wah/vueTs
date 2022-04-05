<template>
  <div id="memos" class="container">
    <MemoItem v-for="item in filterMemo()" :key="item.id" :memo="item"/>
  </div>
</template>
<script lang="ts">
import {Component,Vue} from 'vue-property-decorator';
import ItemData from '../model/ItemData';
import MemoItem from './MemoItem.vue';
@Component({
  components: {
    MemoItem
  },
})
export default class ItemList extends Vue{
  //声明 笔记数组
  memoArr:Array<ItemData> = this.$store.state.aHelper.memoList;
  filterMemo(){
    if(!~this.$store.state.filterCateId){
      return this.memoArr;
    }else{
      return this.memoArr.filter((ele:any)=>{
        return ele.categoryId == this.$store.state.filterCateId;
      })
    }
  }
}
</script>