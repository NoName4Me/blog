---
title: css动画（animation）
date: 2018-03-02 23:33:58
categories:
- 前端
- CSS
tags:
- animation
---

# animation

最近在做[100 Days CSS chalenges](https://codepen.io/collection/XgmakG/)练习时，发现animation这部分知识原来并没有整体的学过，于是有了这篇学习笔记。

这个属性一共有8个子属性，取值（第一个是默认值）如下：
<!---more-->
* `animation-name`: `none`
* `animation-timing-function`: `ease`
* `animation-duration`: `0s`，即使是`0`也要带单位哦，还支持`ms`
* `animation-delay`: `0s`
* `animation-iteration-count`: 1，可取`infinite`无限循环，可以取多值`1,2,3`，每当动画播放，会顺序的循环取用该多值；
* `animation-direction`: `normal`，可取`alternate`正反间隔播放，`reverse`反向播放，`alternate-revser`反正间隔播放；
* `animation-fill-mode`: `none`，可取`fowards`动画结束停留在最后一帧，`backwards`动画开始前停留在第一帧（如果有延迟会比较直观），`both`前两者一起
* `animation-play-state`: `running`，可取`paused`，设置动画暂停，或播放(`running`)

animation属性多值可以参考[这里](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations#Setting_multiple_animation_property_values)，基本原则就是`animation-name`去匹配其它属性，如果其它属性值个数少于`animation-name`，则循环重复使用，比如：

```css
/* 三种动画共用持续时间，fadeInOut播放2次，moveLeft300px播放1次，bounce播放2次，如果动画又被激活，那么fadeInOut播放1次，moveLeft300px播放2次，依此类推 */
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s;
animation-iteration-count: 2, 1;
```

**注意**：同一个元素无法使用多个动画，比如下面的示例，通过`animation-direction:reverse;`想来实现反向效果（示例中橙色），当首次触发后，无法再次播放动画，如果想复用动画，或者设置多个动画，只能通过js来清除然后添加动画，或者监听动画事件（开始／结束等）来实现，所以建议定以独立的动画（如示例中蓝色）：

{% raw %}
<p data-height="265" data-theme-id="dark" data-slug-hash="rJRbJz" data-default-tab="css,result" data-user="blurnull" data-embed-version="2" data-pen-title="animation-demo" class="codepen">See the Pen <a href="https://codepen.io/blurnull/pen/rJRbJz/">animation-demo</a> by BlurNull (<a href="https://codepen.io/blurnull">@blurnull</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
{% endraw %}