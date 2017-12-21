---
title: SVG学习（及实践）笔记
date: 2017-11-19 18:21:00
categories:
- 前端
tags:
- svg
---

*整理中……*

>学习SVG(Scalable Vector Graphics)的笔记，及记录使用中踩过的坑。

# 1. 基本知识

坐标、基本图形（圆、矩形、线、路径等）。
<!--more-->
## 1.1 关于坐标

## 1.2 基本图形

```html
<!-- 圆，(cx, cy): 圆心, r: 半径 -->
<circle cx="50" cy="50" r="20" stroke="#000" stroke-width="1" fill="#fcc" />

<!-- 椭圆，(cx, cy): 椭圆圆心, (rx,ry): 水平／垂直径 -->
<ellipse cx="140" cy="50" rx="40" ry="20" stroke="#000" stroke-width="2" fill="#cfc"/>

<!-- 矩形，(x, y): 左上角坐标, (rx,ry): 圆角的横向纵向半径 -->
<rect x="200" y="30" width="80" height="40" rx="20" ry="10"  stroke="#000" stroke-width="1" fill="#ccf" />

<!-- 直线，(x1, y1): 起点, (x2,y2): 终点 -->
<line x1="320" y1="20" x2="400" y2="40" stroke="#000" stroke-width="2" />
<!-- 点划线，stroke-dasharray: (实 虚),(实 虚), .... -->
 <line x1="320" y1="40" x2="400" y2="60" stroke="#000" stroke-width="2" stroke-dasharray="10 4, 5 10, 4 4, 4 4" />

<!-- 折线，points: 折线的各个点 -->
<polyline points="420 20, 420 40, 440 40, 440 60, 460, 60" fill="none" stroke="#000" />

<!--线的其它属性-->
<!--
    stroke-linecap: butt | round | square
    stroke-linejoin: miter | round | bevel
-->

<!-- 多边形，或者折线（闭合）填充就是多边形咯 -->
<polygon fill="#ff9faf" stroke="#df4f9f" stroke-width="2" points="500,40 500,70 520,80 540,70 540,40 520,30" />
```

如下图所示：
{% raw %}
<svg style="width:600px;height:100px;box-shadow:0 0 8px 0 rgba(0,0,0,.2);border:1px solid rgba(0,0,0,.1);">
    <circle cx="50" cy="50" r="20" stroke="#000" stroke-width="1" fill="#fcc" />
    <ellipse cx="140" cy="50" rx="40" ry="20" stroke="#000" stroke-width="2" fill="#cfc"/>
    <rect x="200" y="30" width="80" height="40" rx="20" ry="10"  stroke="#000" stroke-width="1" fill="#ccf" />
    <line x1="320" y1="20" x2="400" y2="40" stroke="#000" stroke-width="2" />
    <line x1="320" y1="40" x2="400" y2="60" stroke="#000" stroke-width="2" stroke-dasharray="10 4, 5 10, 4 4, 4 4" />
    <polyline points="420 20, 420 40, 440 40, 440 60, 460, 60" fill="none" stroke="#000" />
    <polygon fill="#ff9faf" stroke="#df4f9f" stroke-width="2" points="500,40 500,70 520,80 540,70 540,40 520,30" />
</svg>
{% endraw %}

```html



 
```

## path
> Capital Form: absolute, Lower Case: relative

**M**ove to
**L**ine to
**H**orizontal line to
**V**ertical line to
clo**Z**e path

**A**rc
> A rx,ry rotation big/small-arcFlag,clock-wise flag
`A30,40 0 0,0 70,70`: this means draw a small couter-clock-wise arc(rx=30,ry=40) to (70,70)

Bezier Curves
**Q**uadratic Bezier Curves
Qcx,cy x,y: cx,cy is control point, x,y is end point
Tx,y: control point is last used control point

**C**ubic Bezier Curves
Ccx1,cy1 cx2,cy2 x,y: 2 control points
Scx,cy x,y: first control point is assumed to be the last used point

## Coordinate
viewBox=minX,minY width,height
> this can do shift/scale

preserveAspectRatio
```js
preserveAspectRatio="xMinyMin meet"
// xMin - aligned to left, xMid - middle, xMax - aligned to bottom
// yMin - top
// meet: sliced untill the largest side touch the viewport boundary
// slice: scaled and sliced untill the mallest side touch the viewport boundary
```

## Constructure

* `<defs>` & `<symbol>` 
```html
<defs>
    <linearGradient id="gradient">
      <stop offset="20%" stop-color="#3D9" />
      <stop offset="90%" stop-color="#39F" />
    </linearGradient>
</defs>

<symbol>
    <linearGradient id="gradient">
      <stop offset="20%" stop-color="#3D9" />
      <stop offset="90%" stop-color="#39F" />
    </linearGradient>
</symbol>

<!-- reference to the defined element -->
<g>
    <circle r="20" cx="50" cy="50" fill="url(#gradient)"></circle>
</g>
```

* `<use>`
```html
<use x="0" y="0" xlink:href="#element" fill="#f00" stroke="orange" stroke-width="5px" />
```


* `<marker>`
>you can use viewBox for scale/transform

refX,refY: the offset of X-axis, Y-axis
```html
<defs>
<!-- basic W|H * markerUnits assignedKey's Value-->
    <marker markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth" id="arrow">
        <path d="M0,0 L0,6 L9,3 Z" fill="#3A9"></path>
    </marker>
</defs>


<path d="M100,10 C200,40 300,10 400,50"  stroke="#3DA" marker-end="url(#arrow)" fill="none" stroke-width="2"/>
```
`marker-end`, `marker-start`, `marker-end`(only display when polyline, path, polygon change direction)


# 踩坑记

* 一个兼容SVG和IE的样式类操作（删／增）的工具函数

```js
/**
 * SVG元素的增/删样式类工具函数
 * IE不支持DOMElement.classList,以及jQuery.add/removeClass不支持SVG
 * @param element
 * @param className
 * @param opt 'add' | 'remove'
 */
function svgElementClassTool(element, className, opt) {
  var oldClassList =
    typeof element.getAttribute("class") !== "string"
      ? []
      : element.getAttribute("class").split(" ");
  if (opt === "add") {
    if (oldClassList.indexOf(className) < 0) {
      oldClassList.push(className);
      element.setAttribute("class", oldClassList.join(" "));
    }
  } else if (opt === "remove") {
    var removeIdx;
    for (var i = 0; i < oldClassList.length; i++) {
      if (oldClassList[i] === className) {
        removeIdx = i;
        break;
      }
    }
    removeIdx > -1 && oldClassList.splice(removeIdx, 1);
    element.setAttribute("class", oldClassList.join(" "));
  }
}


```

#  SVG js libs

一开始没有选择d3.js库，而是手动撸原生，很失误。

* [D3.js](https://d3js.org/)
* [SVG.js](http://svgjs.com/)

