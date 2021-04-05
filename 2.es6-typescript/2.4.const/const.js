/**
 * 声明一个const常量变量
 */
// const foo = 1;
// foo = 2;

/**
 * const具有块作用域
 */
// function func() {
//   if (true) {
//     const tmp = 123;
//   }
//   console.log(tmp);
// }
// func();

/**
 * 常量变量所指向的对象本身的可变性
 */
"use strict";
const foo = Object.freeze({});
foo["prop"] = "123";
console.log(foo);
console.log(foo.prop);
