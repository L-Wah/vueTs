<template>
  <el-row class="navbar">
    <!-- logo图标 -->
    <el-col :span="2" class="logo">
      <img src="../assets/logo.png">
    </el-col>
    <!-- 切换语言 -->
    <el-col :span="2">
      <el-dropdown @command="languageChange">
        <el-button type="text">{{language}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu>
          <el-dropdown-item command="zh">中文</el-dropdown-item>
          <el-dropdown-item command="en">Engilsh</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
    <!-- 新建笔记 -->
    <el-col :span="17" class="handle">
      <el-dropdown @command="showAdd">
        <el-button type="text">
          {{ $t("button.add_new") }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="text">
            {{$t("button.text_label")}}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
    <!-- 分类列表 -->
    <el-col :span="2" class="handle">
      <el-dropdown @command="doFilterByCateId">
        <el-button type="text" style="margin-left:10px">
          {{ actionType.text }}
          <el-tag size="mini" :type="actionType.type" effect="dark" class="ml5 mr5">
            {{ actionType.number }}
          </el-tag>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            :divided="index == 1"
            v-for="(item, index) in descType"
            :key="index"
            :command="item.cateId"
          >
            <el-tag
              effect="dark"
              :size="index > 0 ? 'small' : ''"
              :type="item.tagStyle"
            >
              {{ $t(item.tran) }}
              {{ getNumber(item.cateId) }}
            </el-tag>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import {Component,Vue} from 'vue-property-decorator';
import ItemData from '../model/ItemData';
import { DescType } from "../model/CateEnum";

@Component
export default class MenuBar extends Vue{
  language = '中文';
  languageChange(value: string) {
    this.language = value=='zh'?'中文':'Engilsh';
    this.$i18n.locale = value;
  }
  // 新增
  showAdd(): void{
    this.$store.state.transMemo = new ItemData(-1,0);
    this.$store.state.isShow = true;
  }
  // 分类列表
  descType: any = DescType;
  // 获取数量
  getNumber(cateId: string | number): number {
    const memoList = this.$store.state.aHelper.memoList;
    return cateId == -1
      ? memoList.length
      : memoList.filter((e: any) => e.categoryId == cateId).length;
  }
  // 计算属性
  get actionType() {
    const currentCateId: number = this.$store.state.filterCateId;
    const current = this.descType.find((e: any) => e.cateId == currentCateId);
    return {
      text: this.$t(current.tran),
      number: this.getNumber(currentCateId),
      type: current.tagStyle,
    };
  }
  // 更新选中的分类
  doFilterByCateId(cid: number): void {
    this.$store.state.filterCateId = cid;
  }
}
</script>

<style scoped lang="less">
/deep/ .el-button--text,
.el-button--text:focus,.el-button--text:hover{
  color:#000;
  height: 46px;
}
</style>
