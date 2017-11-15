---
title: 前端常见Event总结（待续）
date: 2017-11-12 21:51:35
categories:
- 前端
tags:
- js
- DomEvent
---

小角度总结一下事件。

{% asset_img Event.png Fig1. Events in This Post %}

# 1. MouseEvent

## 1.1 鼠标悬浮
一共有两对，`mouseenter`/`mouseleave`和`mouseover`/`mouseout`，两者的区别如下：
1. 后者会事件冒泡，前者只会出发当前层，而冒泡的好处在于只会被触发一次（层级较深时能有效减少开销）；
2. mouseleave与mouseout，后者在离开子层（即使仍然在范围内）也会触发事件，前者不会。

请看示例（仔细体会）：

{% raw %}
<p data-height="265" data-theme-id="dark" data-slug-hash="bYWBzv" data-default-tab="result" data-user="blurnull" data-embed-version="2" data-pen-title="all-about-event" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/blurnull/pen/bYWBzv/">all-about-event</a> by BlurNull (<a href="https://codepen.io/blurnull">@blurnull</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
{% endraw %}

<!-- more -->

## 1.2 鼠标点击

一次左键单击触发事件：`mousedown`-->`mouseup`-->`click`
一次左键双击触发事件：`mousedown`-->`mouseup`-->`click`-->`mousedown`-->`mouseup`-->`click`-->`dblclick`
一次中键单击触发事件：`mousedown`-->`mouseup`
一次右键单击触发事件：`mousedown`-->`contextmenu`

请看示例：

{% raw %}
<p data-height="265" data-theme-id="dark" data-slug-hash="OOgVLy" data-default-tab="result" data-user="blurnull" data-embed-version="2" data-pen-title="Event-MouseClick" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/blurnull/pen/OOgVLy/">Event-MouseClick</a> by BlurNull (<a href="https://codepen.io/blurnull">@blurnull</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
{% endraw %}

## 1.3 鼠标事件忽略

要想使元素不响应`MouseEvent`（无法鼠标点击触发`hover`、`focus`样式，**`TAB`键可以触发哦**），即让其被鼠标事件忽略该元素，直接穿透到其下方元素，设置样式`pointer-events:none;`即可。

请看示例：

{% raw %}
<p data-height="265" data-theme-id="dark" data-slug-hash="ooeKpG" data-default-tab="result" data-user="blurnull" data-embed-version="2" data-pen-title="make-it-selectable" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/blurnull/pen/ooeKpG/">make-it-selectable</a> by BlurNull (<a href="https://codepen.io/blurnull">@blurnull</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
{% endraw %}

# 2. KeyboardEvent
>**Note:** 如果是为了处理输入事件，最好使用`InputEvent`，因为`KeyboardEvent`只代表键盘事件，非键盘的输入可能无法如你所愿哦～

响应顺序：`keydown` --> `keyup` --> `keypress`。

[键盘编码参考KeyboardEvent.code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code#Code_values_on_Windows)

`// TODO add select article link.`
一般的，非输入DOMElement无法响应`KeyboardEvent`，但是可以添加`tabindex=数字`属性强制让其可以focus，从而响应（见`1.3`节示例）。
