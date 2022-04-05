<template>
  <div id="app">
    <MenuBar />
    <ItemList />
    <MemoEdititor v-if="$store.state.isShow"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuBar from "./components/MenuBar.vue";
import ItemList from "./components/ItemList.vue";
import MemoEdititor from "./components/MemoEdit.vue";

@Component({
  components: {
    MenuBar,
    ItemList,
    MemoEdititor
  },
})
export default class App extends Vue {}
</script>
