import Category from "./CateEnum";
import moment from "moment";
class ItemData {
  id!: number;
  categoryId!: Category;
  title!: string;
  content!: string;
  createTime!: string;
  updateTime!: string;// 补充更新时间

  constructor(id: number = -1,categoryId: Category = -1,title: string = '',content: string = '') {
    this.id = id;
    //在此需要使用 枚举类型 代表 笔记分类
    this.categoryId = categoryId;
    this.title = title;
    this.content = content;
    this.createTime = moment().format('YYYY-MM-DD HH:mm:ss').toString();
    this.updateTime = moment().format('YYYY-MM-DD HH:mm:ss').toString();
  }
}
export default ItemData;