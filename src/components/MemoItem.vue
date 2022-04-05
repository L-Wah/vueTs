<template>
  <div class="memo-container">
    <el-card class="memo" shadow="hover">
      <div slot="header" class="header">
        <span>{{ memo.title }}</span>
        <div>
          <el-tooltip
            class="item"
            effect="dark"
            :content="$t('pop_card.toolTip_edit')"
            placement="bottom"
          >
            <el-button
              size="mini"
              circle
              @click="showEdit"
              icon="el-icon-edit"
            ></el-button>
          </el-tooltip>
          <el-tooltip
            class="item"
            effect="dark"
            :content="$t('pop_card.toolTip_del')"
            placement="bottom"
          >
            <el-button
              @click="doDel"
              size="mini"
              circle
              type="danger"
              icon="el-icon-delete"
            ></el-button>
          </el-tooltip>
        </div>
      </div>
      <div class="content">
        <div class="text">{{ memo.content }}</div>
        <div class="footer">
          <div class="cate">
            {{ $t("card.category") }}:
            <el-tag :type="tagStyle(memo.categoryId)" size="small" effect="dark">
              {{ tagTran(memo.categoryId) }}
            </el-tag>
          </div>
          <div>
            <div>
              {{ $t("card.create_time") }}: {{ memo.createTime}}
            </div>
            <div>
              {{ $t("card.update_time") }}: {{ memo.updateTime}}
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ItemData from "../model/ItemData";
import { DescType } from "../model/CateEnum";

@Component
export default class MemoItem extends Vue {
  @Prop() memo!: ItemData;

  // 删除方法
  doDel(): void {
    if (!confirm(`确认要删除<${this.memo.title}>的笔记吗？`)) return;
    this.$store.state.aHelper.remove(this.memo.id);
  }
  showEdit(): void {
    //创建副本
    let newMemo = JSON.parse(JSON.stringify(this.memo));
    // 传递到vuex
    this.$store.commit("showEditMemo", newMemo);
  }

  descType: any = DescType;
  tagStyle(id: string | number): string {
    return this.descType.find((e: any) => e.cateId == id).tagStyle;
  }
  tagTran(id: string | number): string {
    const tran: any = this.$t(this.descType.find((e: any) => e.cateId == id).tran);
    return tran;
  }
}
</script>
