<!--
 * @Descripttion: 
 * @Author: JasonPink
 * @Date: 2020-06-11 15:28:53
 * @LastEditors: JasonPink
 * @LastEditTime: 2020-06-11 17:57:53
--> 
## BFC是什么
> BFC(Block Formatting Context),全称块级格式化上下文。是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

### 具有BFC特性的元素可以看作是隔离的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且BFC具有一些普通元素没有的特性。
---
## 如何触发BFC
只要元素满足下面任一条件即可触发BFC特性(来自MDN)
+ 根元素(html)


+ 浮动元素：float不为none
+ 绝对定位元素：position为absolute或fixed
+ 行内块元素：display:inline-block;
+ 表格单元格: display: table-cell;
+ 表格标题：display: table-caption;
+ 匿名表格单元格元素（元素的 display为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、row、tbody、thead、tfoot的默认属性）或 inline-table）
+ overflow 值不为visible 的块元素
+ display 值为 flow-root 的元素
+ contain 值为 layout、content或 paint 的元素
+ 弹性元素（display为 flex 或 inline-flex元素的直接子元素
+ 网格元素（display为 grid 或 inline-grid 元素的直接子元素
+ 多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）
+ column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug


---
## BFC有什么特性
1. 同一个BFC下外边距会发生合并


2. 计算BFC高度时，浮动元素也参与计算（可用来清楚浮动）
3. 浮动盒区域不会叠加到BFC上（可实现两列自适应布局）
4. BFC是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素
5. 每个元素的margin box的左边，与容器块border box的左边相接触,即使存在浮动也是如此
---
## BFC有什么应用
### 1. 清除浮动

```
.clearfix { 
  overflow:hidden;
}

.left {
  float:left;
  width:100px;
  height:200px;
}

<div class="container clearfix">
  <div class="left"></div>
</div>
```
### 2. 实现两列自适应布局

```
.container { 
  height: 500px;
}

.left {
  float:left;
  width:100px;
  height:100%;
}

.right {
  overflow: hidden;
}

<div class="container">
  <div class="left"></div>
  <div class="right"></div>
</div>
```
---