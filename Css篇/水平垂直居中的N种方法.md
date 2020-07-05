<!--
 * @Descripttion: 
 * @Author: JasonPink
 * @Date: 2020-06-11 14:58:14
 * @LastEditors: JasonPink
 * @LastEditTime: 2020-06-11 15:27:59
--> 
## 页面结构
```
.container {
    position: relative;
    width: 500px;
    height: 500px;
    border: 1px solid #000;
}

.box {
    width: 200px;
    height: 200px;
    background: green;    
}

<div class="container">
    <div class="box">123456789</div>
</div>
```
---
## 居中元素固定宽高
### 1. absolute+负margin
```
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -100px 0 0 -100px; //由于绝对定位是以左上角为标准,需要利用margin负值来处理一下
}
```
---
### 2. absolute+margin:auto
```
.center {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto; 
}
```
---
### 3. absolute+calc
```
.center {
  position: absolute;
  top: calc(50% - 100px);
  left: calc(50% - 100px);
}
```
---
## 居中元素不定宽高
### 1. absolute+transfrom
```
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transfrom: translate(-50%, -50%);
}
```
---
### 2. flex
```
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```
---
### 3. grid
```
.container {
  display: grid;
}

.center {
  align-self: center;
  justify-self: center;
}
```
---
### 4. table
```
.container {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.center {
  display: inline-block;
}
```
---
### 5. line-height
```
.container {
  line-height: 500px;
  text-align: center;
  font-size: 0px;
}

.center {
  font-size: 16px;
  display: inline-block;
  vertical-align: middle;
  line-height: initial;
  text-align: left; /* 修正文字 */
}
```
---
### 6. writing-mode
```
<div class="container">
    <div class="container-inner">
        <div class="box">123123</div>
    </div>
</div>

.container {
    writing-mode: vertical-lr;
    text-align: center;
}
.container-inner {
    writing-mode: horizontal-tb;
    display: inline-block;
    text-align: center;
    width: 100%;
}
.box {
    display: inline-block;
    margin: auto;
    text-align: left;
}
```
---
