import ItemData from "@/model/ItemData";
import DataHelper from "./DataHelper";
import moment from "moment";
import Category from "../model/CateEnum"
class ActionHelper{
  //1.负责数据处理 DataHelper
  detaHelper:DataHelper = new DataHelper('menoData','id');
  // 1.1 笔记数组
  memoList!:Array<ItemData>;

  constructor(){
    //读取本地数据，将笔记数组 保存到 this.memoList变量中
    this.memoList = this.readData();
  }
  //2.负责业务处理
  //2.1 读取笔记
  readData():Array<ItemData>{
    //1.读取本地的 Object数组 -DataHelper
    let arrObj = this.detaHelper.readData();
    //2.将Object数组 转成 itemData数组
    let arrItem = arrObj.map((ele:any)=>{
      let item:ItemData = new ItemData();
      item.id =  ele.id;
      item.categoryId =  ele.categoryId;
      item.title =  ele.title;
      item.content =  ele.content;
      item.createTime =  ele.createTime;
      item.updateTime =  ele.updateTime;
      return item;
    })
    //3.返回itemData数组
    return arrItem;
  }
  //2.2 新增笔记
  add(item:ItemData):number{
    //保存到本地 DataHelper.addData，会返回生成的id值
    item.id = this.detaHelper.addData(item);
    //将笔记添加到笔记数组中
    this.memoList.push(item);
    //将笔记数组重新保存到本地
    this.detaHelper.saveData(this.memoList);
    //返回新笔记的id
    return item.id;
  }
  //2.3 修改笔记
  edit(item:ItemData):void{
    // 找出id相同的对象
    let editItem:ItemData|undefined = this.memoList.find(ele=>{
      return ele.id == item.id;
    })
    if(editItem){
      // 修改对象的值
      editItem.categoryId = item.categoryId;
      editItem.title = item.title;
      editItem.content = item.content;
      editItem.updateTime = moment().format('YYYY-MM-DD HH:mm:ss').toString();;
      // 将更新后的数组重现保存到本地
      this.detaHelper.saveData(this.memoList);
    }
  }
  //2.4 删除笔记
  remove(id:number):void{
    // 根据id 找出要删除的对象在数组中的下标
    let index:number = this.memoList.findIndex(ele=>{
      return ele.id == id;
    })
    if(~index){
      // 根据下标调用数据的splice方法删除对象
      this.memoList.splice(index,1);
      // 将删除对象后的数组重新保存回本地
      this.detaHelper.saveData(this.memoList);
    }
  }
  //2.5 获取文章分类
  getCategoryName(cateId:Category):string{
    const arrName = ['工作','生活','学习'];
    return arrName[cateId];
  }
}
export default ActionHelper;
