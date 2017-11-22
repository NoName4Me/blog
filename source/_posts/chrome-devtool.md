---
title: chrome-devtool
date: 2017-11-22 00:33:18
tags:
---


**常用快捷键一览**

* DevTool面板

|  快捷键   |  功能  |
| -------- | ------ |
|`ctrl + +/-` | 窗口放大/缩小 |
|`ctrl + 0` | 窗口默认大小 |
| `ctrl + shift + j` | 开启Dev模式，并定位到console页签 |
| `ctrl + [` | 页签切换(向左) |
|`ctrl + shift + p`|DevTools Command Menu|

* Source页签

|  快捷键   |  功能  |
| -------- | ------ |
|`ctrl + g` | 跳转行 |
|`ctrl + p` | 打开文件 |
|`F11`|进入函数|
|`shift + F11`、`ctrl + shift + ;`|跳出函数|

* Console页签

<kbd>dddd</kbd>

|  快捷键   |  功能  |
| -------- | ------ |
|<code>ctrl + &#96;</code> | 聚焦到console |



chrome://flags/#enable-devtools-experiments

`Settings` --> `Experiments`


[Accessibility Inspector](https://gist.github.com/marcysutton/0a42f815878c159517a55e6652e3b23a)


## Element

|  快捷键   |  功能  |
| -------- | ------ |
|`F2`|以HTML形式编辑|
|`ctrl + enter`|保存更改|
|`esc`|退出不保存|
|`鼠标选中移动`||
|`delete`|删除|
|`ctrl + z`|撤销|


悬浮会有高亮当前页面元素，如果不在视窗内，会提示在边缘位置，右键选择`Scroll into View`跳转到元素。

* Event Listeners

`handler`上右键选择`show function defination`跳转到源码查看定义。

* DOM Breakpoints

在`Element`页签中的元素上右键，选择`break on`中的一项，会增加断点到`DOM Breakpoints`栏目下。



* Animation

{% asset_img annotated-animation-inspector.png Fig1. 动画面板 %}