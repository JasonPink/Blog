<!--
 * @Descripttion: 
 * @Author: JasonPink
 * @Date: 2020-06-12 14:23:15
 * @LastEditors: JasonPink
 * @LastEditTime: 2020-06-12 15:41:23
--> 
## JS和CSS都有可能阻塞DOM解析
当我在JavaScript中访问了某个元素的样式，那么这时候就需要等待这个样式被下载完成才能继续往下执行，所以在这种情况下，CSS也会阻塞DOM的解析。
```
<html>
    <head>
        <style type="text/css" src = "theme.css" />
    </head>
    <body>
        <p>极客时间</p>
        <script>
            let e = document.getElementsByTagName('p')[0]
            e.style.color = 'blue'
        </script>
    </body>
</html>
```
---
## 一个完整的渲染流程可总结为如下
1. 渲染引擎将HTML内容转换为能够读懂的DOM数结构


2. 渲染引擎将CSS样式表转换为浏览器可以理解的stlyeSheets,计算出DOM节点的样式
3. 创建布局树,并计算元素的布局信息
4. 对布局树进行分层，并生成分层树
5. 为每个图层生成绘制列表，并将其提交到合成线程
6. 合成线程将图层分成图块，并在光栅化线程池中将图块转换成位图
7. 合成线程发送绘制图块命令DrawQuad给浏览器进程
8. 浏览器进程根据DrawQuad消息生成页面，并显示到显示器上