---
title: 异步以及Promise（You don't know JS读书笔记）
date: 2018-01-06 20:36:21
tags:
- 读书笔记
- JS
categorie:
- 前端
---


promise如果有多个then，它们相互不会影响，如下例中"C"的处理不会影响也不会先于"B"。

```js
p.then( function(){
	p.then( function(){
		console.log( "C" );
	} );
	console.log( "A" );
} );
p.then( function(){
	console.log( "B" );
} );
// A B C
```

如果你不确定某个函数是返回一个promise结果还是一个即时值，那么最好使用`Promise.resolve(..)`来封装一下。
```js
// don't just do this:
foo( 42 )
.then( function(v){
	console.log( v );
} );

// instead, do this:
Promise.resolve( foo( 42 ) )
.then( function(v){
	console.log( v );
} );
```