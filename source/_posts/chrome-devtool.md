---
title: Chrome DevTool使用
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

>**技巧：** 许多扩展程序都会将其自己的事件侦听器添加到DOM上。如果遇到有些不是你的代码设置的事件侦听器，可以在隐身窗口中重新打开页面，默认情况下，隐身窗口会阻止扩展程序运行。

* Animation

位于`Element`同级的更多菜单里进入，或者`ctrl + shift + p`输入`Animation`选择`Drawer Show Animations`进入。

{% asset_img annotated-animation-inspector.png Fig1. 动画面板 %}

1. Controls：可以清除所有当前捕捉的动画组，更改选定动画组的速度。
2. Overview：在这里选择动画组，然后在 Details 窗格中进行检查和修改。
3. Timeline：可以暂停和启动动画，或者跳到动画中的特定点。
4. Details：查看和修改当前选定的动画组（左侧深色代表定义，右侧浅色代表重复，实心球动画起止，空心球关键帧）。

* Styles

|菜单|功能|
|----|----|
|`Filter`|就是搜索啦|
|`.cls`|增加类|
|`+`|增加css规则|
|`长按+`|增加css规则，并选择添加到哪个样式文件里|
|`点击某个颜色前面的彩色小方块`|打开颜色拾取器|