//0 - 工作
//1 - 生活
//2 - 学习

// enum Category{
//   Work = 0,
//   Life = 1,
//   Study = 2,
// }
// 使用默认枚举值: 枚举值自动从0开始排
enum Category{
  Work,
  Life,
  Study,
}

const DescType = [
  {
    cateId: -1,
    tran: "button.all",
    tagStyle: "info",
  },
  {
    cateId: 0,
    tran: "pop_card.work",
    tagStyle: "success",
  },
  {
    cateId: 1,
    tran: "pop_card.life",
    tagStyle: "primary",
  },
  {
    cateId: 2,
    tran: "pop_card.study",
    tagStyle: "warning",
  },
];
export { DescType };
export default Category;