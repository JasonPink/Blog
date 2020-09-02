## JSX是JavaScript的语法扩展
---

### 在JSX中嵌入表达式
```
const name = 'Josh'
const element = <h1>Hello, { name }</h1>

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const element = <h1>Hello, { formatName(user) }</h1>

ReactDOM.render(
  element,
  document.getElementById('root')
)
```
---
### JSX也是一个表达式
可以在if语句和for循环的代码块中使用JSX，将JSX赋值给变量，把JSX当作参数传入，以及从函数中返回JSX
```
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

```
---
### JSX特定属性
    可以通过使用引号，来将属性值指定为字符串字面量，也可以使用大括号，来在属性值中插入一个JavaScript表达式
```
const element = <div tabIndex="0"></div>;

const element = <img src={user.avatarUrl}></img>;

```



    因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。例如，JSX 里的 class 变成了 className，而 tabindex 则变为 tabIndex。
---

## 元素是构成React应用的最小砖块
### 将一个元素渲染为DOM
```
<div id="root"></div>

const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```
---
### 更新已渲染的元素
    React元素是不可变对象，一旦创建，就无法更改它的子元素或者属性。一个元素就像电影的单帧，它代表了某个时刻的UI
```
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```
---
## 组件&Props
    组件，从概念上类似与JavaScript函数。它接受任意的入参，并返回用于描述页面展示内容的React元素
### 函数组件与class组件
```
//这类组件被称为函数组件，因为它本质上就是JavaScript函数
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}
//ES6的class来定义组件
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```
---
### 渲染组件
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

const element = <Welcome name="yemeng">

React.render(
  element,
  document.getElementById('root')
)
```
---
### 组合组件
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

function App() {
  return (
    <div>
      <Welcome name="yemeng">
      <Welcome name="yetao">
      <Welcome name="jack">
    </div>
  )
}

React.render(
  <App />,
  document.getElementById('root')
)
```
---
## 所有React组件都必须像纯函数一样保护它们的props不被更改
---
## 条件渲染
```
function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign up!</h1>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />
}

ReactDOM.render(
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
)
```
---
## 元素变量：使用变量来储存元素
### 渲染多个组件
```
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
```
