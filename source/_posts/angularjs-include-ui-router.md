---
title: angularjs页面分割和路由（ui-router)
date: 2018-02-26 19:40:58
categories:
- 前端
tags:
- angularjs
- 路由
---


做页面，经常会遇到这样的需求：

1. 页面太大，需要分割；
2. 单页面众多状态（页面）切换；

在angular框架前提下，第1点一般通过`ng-include`来实现（不存在传递参数、不同状态不同显示等问题），所以多用于页眉／页脚／静态页。第2点一般用`ui-router`来控制。

`ng-include`和`ui-router`



## `ui-router`

### `url`传参

```js
// 路由配置
$stateProvider.state({
    name: 'state1',
    url: '/test/:say',
    templateUrl: 'x',
    controller: 'xx'
});


// 传递参数，url会变为`test/hi~/`
$state.go('state1', {say: 'hi~'}); // 或通过访问url`test/hi~/`传入参数

// controller中获取该参数
$stateParameter.say;
$state.params; // 这个能获取到子状态的参数
```

**注意**：0.2.10版本前不支持$state.go()传递对象参数。

### 直接状态带参

```js
$stateProvider.state({
    name: 'state1',
    url: '/test',
    params: {
        say: null
    },
    templateUrl: 'x',
    controller: 'xx'
});
```

使用同`url`传参，不同在于url中不会出现该传递参数。