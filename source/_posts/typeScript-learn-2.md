---
title: typeScript学习笔记(2/3)
date: 2017-12-18 23:14:17
categories:
- 前端
tags:
- TypeScript
---
# 2. 学习

## 2.3 类

### 2.3.1 继承

```ts
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    // 在调用this之前，必须先调用super
    constructor(name: string) { super(name); }
    // 方法重写（覆盖）
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
```

### 2.3.2 `private`/`protected`/`public`

```ts
// private
class Animal {
    // 仅能在Animal域内访问
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
    constructor() { 
        super("Rhino");
        // a. 这里也无法访问Animal里的name
        console.log(this.name);
    }
    test() {
        // b. 这里也无法访问
        this.name;
    }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
console.log(animal.name); // Property 'name' is private and only accessible within class 'Animal'.
animal = employee; // Error: 'Animal' and 'Employee' are not compatible

// protected
// 上面private里的'a'和'b'处可以访问到name
class Person {
    protected name: string;
    // 修饰构造器，表示只可以被继承，不可以直接实例化
    protected constructor(theName: string) { this.name = theName; }
}
```

### 2.3.3 参数属性

```ts
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName; // 注意这个的变化
    }
}
// 可以演变为
class Octopus {
    readonly numberOfLegs: number = 8;
    // 这里还可以用private／protected／public修饰
    constructor(readonly name: string) {
    }
}

let t = new Octopus("jonge");
t.name;
```

### 2.3.4 访问器
