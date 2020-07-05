<!--
 * @Descripttion: 
 * @Author: JasonPink
 * @Date: 2020-06-15 15:26:36
 * @LastEditors: JasonPink
 * @LastEditTime: 2020-06-15 15:26:37
--> 
## v-model其实就是一个语法糖,可配合修饰符一起使用lazy、trim等（v-model.lazy）
### 在原生表单元素中
```
<input v-model="inputValue">

相当于

<input v-bind:value="inputValue" @input="inputValue = $event.target.value">
```
---
### 在自定义组件中
```
<my-component v-model="inputValue"></my-component>

相当于

<my-component :value="inputValue" @input="inputValue = argument[0]"></my-component>
```
需要在子组件中通过emit方法触发回调，inputValue是input事件回调的第一个参数
this.$emit('input', value);

