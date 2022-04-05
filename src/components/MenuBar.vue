<template>
  <el-row class="navbar">
    <el-col :span="2" class="logo">
      <img src="../assets/logo.png">
    </el-col>
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
    <el-col :span="17" class="handle">
      <el-dropdown @command="">
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
    <el-col :span="2" class="handle">
      <el-dropdown @command="">
        <el-button type="text" style="margin-left:10px">全部
          <el-tag size="mini" type="info" effect="dark" class="ml5 mr5">99</el-tag>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="text">
            {{$t("button.text_label")}}
          </el-dropdown-item>
          <!-- <el-dropdown-item
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
              {{ (item.tran) }}
              {{ getNumber(item.cateId) }}
            </el-tag>
          </el-dropdown-item> -->
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import {Component,Vue} from 'vue-property-decorator';
@Component
export default class MenuBar extends Vue{
  descType = [];
  language = '中文';
  languageChange(value: string) {
    this.language = value=='zh'?'中文':'Engilsh';
    this.$i18n.locale = value;
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
