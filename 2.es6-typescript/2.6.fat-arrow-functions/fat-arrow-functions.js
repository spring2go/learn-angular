/**
 * 胖箭头函数的语法
 */
// setTimeout(() => console.log("setTimeout called!"), 1000);

/**
 * 有参数的情况
 */
// let add = function (a, b) {
//   return a + b;
// };
// let add = (a, b) => a + b;
// console.log(add(1, 2));

/**
 * this关键字+调用上下文
 */
let obj = {
  name: "William",
  sayLater: function () {
    console.log(this); // `this` points to obj
    setTimeout(() => {
      console.log(this); // `this` points to obj
      console.log(`+${this.name}+`); // `this` points to obj
    }, 1000);
  },
};
obj.sayLater();
