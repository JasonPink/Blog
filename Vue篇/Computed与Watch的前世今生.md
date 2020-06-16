<!--
 * @Descripttion: 
 * @Author: JasonPink
 * @Date: 2020-06-15 15:30:06
 * @LastEditors: JasonPink
 * @LastEditTime: 2020-06-15 17:06:27
--> 
## Computed
initState -> initComputed

initComputed函数创建了一个对象用来收集Watcher，并挂载到vm的实例上(_computedWatchers),遍历computed属性，获取到getter,并为每个属性实例化一个Watcher(传入额外的参数lazy:true)

接下来我们来看实例化computed Watcher内部发生了什么
```
constructor() {
  //这里并没有立马求值
  this.value = this.lazy
      ? undefined
      : this.get()
}
```
