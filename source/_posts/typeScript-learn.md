---
title: typeScript学习笔记(1/3)
date: 2017-12-16 14:19:36
categories:
- 前端
tags:
- TypeScript
---

>*因为这只是个人的学习笔记，不便之处望谅解。*

>**内容：** 基本类型、变量声明。

# 1. 官网的5分钟快速入门

## 1.1 工具准备

* 安装

要编译为`.js`文件，所以需要安装编译工具。

```bash
npm install -g typescript
```

* 编译

```bash
tsc xxx.ts
```

## 1.2 DEMO

直接用代码说明。
<!-- more -->

```ts
// greeting.ts
class Student { // ES6
    fullName: string; // ts: 类型限制，如果右值类型不匹配编译时会报错
    // ts: 函数入参类型限定
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return `Hello, ${person.firstName} ${person.lastName}~`;
}

let user = new Student("Jonge", "M.", "Den");

document.body.innerHTML = greeter(user);
```

# 2. 玩法介绍

## 2.2 基本类型

```ts
// basics
let name: string = 'hello ts';

let ageArr: number[] = [20, 30, 40];
let ageArr: Array<number> = [20, 30, 40];


// tuple
let x: [string, number]; // declare
x[0] = 'hi'; // ok
x[1] = 12; // error, must be string

x[2] = 'hi'; // ok
x[2] = 12; // ok
x[2] = false; // error, must be string | number

// enum
enum SkinColor {White = 1, Black, Yellow}
let jongeSkinColor = SkinColor.Yellow;
let skinColorName: string = SkinColor[2];

// any
let notSure: any = 23;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

// type assertion
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// never void null undefined参考官方doc
```

* 类型断言的使用场景举例

```ts
// 联合类型指定为更小类型
function getLength(sth: string | number): number {
    return sth.length; // return (<string>sth).length
}
// 如果用了lint检查，会看到下面的提示，当然编译时也会有类似的错误提示
// Property 'length' does not exist on type 'string | number'.
//  Property 'length' does not exist on type 'number'.
```

## 2.2 变量声明

是时候将`var`切换为`let`和`const`了。

[something about var let](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

* Destructuring

```ts
let input = [1, 2];
let [first, second] = input; // first = 1, second = 2
let [first, ...rest] = [1, 2, 3, 4]; // first = 1, rest = [2,3,4]
let [a,,c,] = [1, 2, 3, 4]; // a = 1, c = 3

let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o; // 如果没有自定义变量名，默认会以属性名命名变量
let { a: newA, b: newB } = o; // 自定义变量名
// 注意最外层的圆括号是必须的，因为js会将{}解析为块语句
({ a, b } = { a: "baz", b: 101 });
```

* Spreading

```ts
let a = [1, 2], b = [3, 4];
let c = [...a, ...b]; // c = [1, 2, 3, 4]

let o = {name: 'jonge', age: 29, addr: 'MTS'};
let newO = {o, age: 30}; // newO = {name: 'jonge', age: 30, addr: 'MTS'}
```

------

# 参考

1. [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook)

2. 
