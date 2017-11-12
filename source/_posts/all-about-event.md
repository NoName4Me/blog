---
title: 前端常用的事件总结（待续）
date: 2017-11-12 21:51:35
categories:
- 前端
tags:
- js
- DomEvent
---

# 1. Mouse事件

## 1.1 鼠标进/出
一共有两对，`mouseenter`/`mouseleave`和`mouseover`/`mouseout`，两者的区别如下：
1. 后者会事件冒泡，前者只会出发当前层，而冒泡的好处在于只会被触发一次（层级较深时能有效减少开销）；
2. mouseleave与mouseout，后者在离开子层（即使仍然在范围内）也会触发事件，前者不会。

请看示例（仔细体会）：

{% raw %}
<p data-height="265" data-theme-id="0" data-slug-hash="bYWBzv" data-default-tab="result" data-user="blurnull" data-embed-version="2" data-pen-title="all-about-event" class="codepen">See the Pen <a href="https://codepen.io/blurnull/pen/bYWBzv/">all-about-event</a> by BlurNull (<a href="https://codepen.io/blurnull">@blurnull</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
{% endraw %}

<!-- more -->