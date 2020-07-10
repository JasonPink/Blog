## Flex布局是什么？
> Flex时Flexible Box的缩写，意为弹性布局

采用Flex布局的元素，称为Flex容器，简称容器。它的所有子元素自动称为容器成员，称为Flex项目，简称项目。

---
## 容器的属性
+ flex-direction: 决定主轴的方向（项目的排列方向）
    + row（默认值）：→
    + row-reverse：←
    + column： ↓
    + column-reverse: ↑

+ flex-wrap：如果一条轴线排不下，如何换行
    + nowrap（默认值）: 不换行
    + wrap: 换行,第一行在上方
    + wrap-reverse: 换行，第一行在下方
+ flex-flow：是flex-direction属性和flex-wrap的简写形式，默认值为row nowrap
+ justify-content: 定义项目在主轴上的对齐方式
    + flex-start(默认值): 左对齐
    + flex-end: 右对齐
    + center: 居中
    + space-between: 两端对齐，项目之间间隔相等
    + space-around: 每个项目两侧的间隔相等
+ align-items：定义项目在交叉轴上的对齐方式
    + flex-start: 交叉轴的起点对齐
    + flex-end: 交叉轴的终点对齐
    + center: 交叉轴的中点对齐
    + baseline: 项目的第一行文字的基线对齐
    + stretch(默认值): 如果项目未设置高度或设为auto，将占满整个容器的高度
+ align-content：定义了多根轴线的对齐方式（如果只有一根轴线，该属性不起作用）
    + flex-start: 交叉轴的起点对齐
    + flex-end: 交叉轴的终点对齐
    + center: 交叉轴的中点对齐
    + space-between: 与交叉轴两端对齐，轴线之间的间隔平均分布
    + space-around: 每根轴线两侧的间隔都相等
    + stretch(默认值): 轴线占满整个交叉轴
---
## 项目的属性
+ order: 定义项目的排列顺序，数值越小，排列越靠前，默认为0。
+ flex-grow: 定义项目的放大比例，默认为0，存在剩余空间也不放大
+ flex-shrink: 定义项目的缩小比例，默认为1，如果空间不足，该项目将缩小
+ flex-basis: 定义了在分配多余空间前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。默认值为auto,即项目的本来大小
+ flex: 是flex-grow、flex-shrink和flex-basis的简写，默认值为 0 1 auto
    + 该属性有两个快捷值：auto(1 1 auto) 和 none(0 0 auto)
+ align-self: 允许单个项目与其它项目不一样的对齐方式，可覆盖。默认值为auto，标识继承父元素的align-items，如果没有父元素，则等同于stretch
---
## flex的简写属性
+ 当flex取值为none,则计算值为 0 0 auto，如下
    ```
    .item {flex: none;}
    .item {
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: auto;
    }
    ```
+ 当flex取值为auto,则计算值为 1 1 auto，如下
    ```
    .item {flex: auto;}
    .item {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: auto;
    }
    ```
+ 当flex取值为一个非负数字,则该数字为 flex-grow 值，flex-shrink 取 1，flex-basis 取 0%，如下是等同的：
    ```
    .item {flex: 1;}
    .item {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0%;
    }
    ```
+ 当flex取值为一个长度或百分比,则该数字为 flex-basis 值，flex-grow 取 1，flex-shrink 取 1，如下是等同的：
    ```
    .item-1 {flex: 0%;}
    .item-1 {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0%;
    }
    .item-2 {flex: 24px;}
    .item-2 {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 24%;
    }
    ```
+ 当flex取值为两个非负数字,则分别视为 flex-grow 和 flex-shrink 的值，flex-basis 取 0%，如下是等同的：
    ```
    .item {flex: 2 3;}
    .item {
        flex-grow: 2;
        flex-shrink: 3;
        flex-basis: 0%;
    }
    ```
+ 当flex取值为一个非负数字和一个长度或百分比,则分别视为 flex-grow 和 flex-basis 的值，flex-shrink 取 1，如下是等同的：
    ```
    .item {flex: 2333 3222px;}
    .item {
        flex-grow: 2333;
        flex-shrink: 1;
        flex-basis: 3222px;
    }
    ```
    