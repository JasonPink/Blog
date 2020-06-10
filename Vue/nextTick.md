<!--
 * @Descripttion: 
 * @Author: JasonPink
 * @Date: 2020-06-10 17:02:29
 * @LastEditors: JasonPink
 * @LastEditTime: 2020-06-10 17:46:37
--> 
## 异步更新队列
下面这段话是来自Vue的官网，通过这段话我们大概已经了解了Vue异步更新队列的原理了。
> Vue在更新DOM时是异步执行的。只要侦听到数据变化，Vue将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个Watcher被多次触发，只会推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。
---
### 这里介绍3个nextTick定义的变量

+ callbacks: 用来存储所以需要执行的回调的数组
+ pending: 用来标识是否正在执行回调函数
+ timerFunc: 用来触发执行回调函数

### 前面两个都比较简单，下面介绍一下timerFunc

+ 首先判断当前环境支不支持Promise,如果支持，采用Promise方式触发回调。
+ 判断支不支持MutationObserver，如果支持MutationObserver，则实例化一个观察者对象，观察文本节点发生变化时，触发执行所有回调函数。
+ 判断支不支持setImmediate，采用setImmediate
+ 如果以上都不支持，最后采用setTimeout
---
### 接下来我们用代码的方式来模拟实现一下，加深一下理解
```
//
```