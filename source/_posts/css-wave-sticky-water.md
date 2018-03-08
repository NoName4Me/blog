---
title: CSS实现水的波浪和粘黏效果
date: 2018-03-07 20:48:46
categories:
- 前端
- CSS
tags:
- animation
---

# 1. 波浪效果

通过圆角矩形的旋转，并遮挡部分内容来实现。

```scss
// 动画定义
@keyframes animate-wave {
  0% {
    transform: translate(-50%, 0) rotate(0deg);
  }
  50% {// 这个Y轴的偏移是为了更生动的波浪
    transform: translate(-50%, 2%) rotate(180deg);
  }
  100% {
    transform: translate(-50%, 0%) rotate(360deg);
  }
}

// 动画引用
.wave {
    border-radius: 45%;
    animation: animate-wave 8s linear infinite;
}
```

效果展示：

{% raw %}
<p data-height="330" data-theme-id="dark" data-slug-hash="RQXOGK" data-default-tab="result" data-user="blurnull" data-embed-version="2" data-pen-title="CSS-sticky-water" class="codepen">See the Pen <a href="https://codepen.io/blurnull/pen/RQXOGK/">CSS-sticky-water</a> by BlurNull (<a href="https://codepen.io/blurnull">@blurnull</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
{% endraw%}

# 2. 水滴粘黏效果

这种效果的关键就在于水滴之间的连接是圆润平滑的，如下图所示。

那么问题来了，在CSS里如何实现这种效果呢？有个变换叫`fitler`，^__^。

原理且先不讨论，我们看一下PS里高斯模糊然后高对比度的效果：

<img src="" >

css里就是借助`filter: blur()`和`filter: contrast()`。

效果展示：

{% raw %}
<p data-height="320" data-theme-id="dark" data-slug-hash="LdPKjg" data-default-tab="css,result" data-user="blurnull" data-embed-version="2" data-pen-title="CSS-wave-sticky-2" class="codepen">See the Pen <a href="https://codepen.io/blurnull/pen/LdPKjg/">CSS-wave-sticky-2</a> by BlurNull (<a href="https://codepen.io/blurnull">@blurnull</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
{% endraw %}

-----

# 参考

1. CSS实现波浪效果：https://github.com/chokcoco/iCSS/issues/22

2. [100 days CSS challenge 007](https://codepen.io/blurnull/pen/PQMwpQ)