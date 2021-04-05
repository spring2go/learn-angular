/**
 * 块作用域
 */
{
  // 这是一个块
}
// 这并不是块的一部分

/**
 * 全局作用域
 */
// {
//   var a = "block";
// }
// console.log(a);

/**
 * 函数作用域
 */
// function hello() {
//   var a = "in hello function";
//   for (var i = 0; i < 5; i++) {
//     var a = "in for loop block";
//   }
//   console.log(a);
// }
// hello();

/**
 * IIFE
 */
// function hello() {
//   var a = "in hello function";

//   for (var i = 0; i < 5; i++) {
//     // (function () {
//     //   var a = "in anonymous function";
//     // })();
//     function something() {
//       var a = "in anonymous function";
//     }
//     something();
//   }
//   console.log(a);
// }
// hello();

/**
 * Let变量声明关键字
 */
// function hello() {
//   var a = "in hello function";
//   for (var i = 0; i < 5; i++) {
//     let a = "in for loop block";
//   }
//   console.log(a);
// }
// hello();

/**
 * JS面试题
 */
var funcs = [];
for (let i = 0; i < 5; i++) {
  funcs.push(function () {
    console.log(i);
  });
}
funcs.forEach(function (func) {
  func();
});
