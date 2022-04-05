<template>
  <el-dialog
    :title="memo.id == -1 ? $t('pop_card.add') : $t('pop_card.edit')"
    :visible.sync="$store.state.isShow"
  >
    <el-form :model="memo">
      <el-form-item :label="$t('pop_card.type')">
        <el-select v-model="memo.categoryId">
          <el-option
            :label="$t('pop_card.work')"
            :value="cate['Work']"
          ></el-option>
          <el-option
            :label="$t('pop_card.life')"
            :value="cate['Life']"
          ></el-option>
          <el-option
            :label="$t('pop_card.study')"
            :value="cate['Study']"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('pop_card.title')">
        <el-input v-model="memo.title"></el-input>
      </el-form-item>
      <el-form-item :label="$t('pop_card.content')">
        <el-input v-model="memo.content" type="textarea"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="$store.state.isShow = false">{{
        $t("button.cancel")
      }}</el-button>
      <el-button type="primary" @click="save">{{
        $t("button.save")
      }}</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ItemData from "../model/ItemData";
import Category from "../model/CateEnum";

@Component
export default class MemoEdit extends Vue {
  memo!: ItemData;
  cate: any = Category;
  created() {
    this.memo = this.$store.state.transMemo;
  };
  save(){
    // 验证数据
    if (this.memo.title.trim() == "" || this.memo.content.trim() == "") {
      const warning: any = this.$t("pop_card.not_complete_warning");
      return this.$message.warning(warning);
    }
    // 保存memo对象，先判断新增还是修改
    if(!~this.$store.state.transMemo.id){
      // id为-1，位运算~变为0
      this.$store.state.aHelper.add(this.memo);
    }else{
      this.$store.state.aHelper.edit(this.memo);
    }
    // 关闭编辑框
    this.$store.state.isShow = false;
  }
}
</script>
