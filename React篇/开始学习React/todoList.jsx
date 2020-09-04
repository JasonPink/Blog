import React, { Component } from "react";
import "./index.css";

class ListItem extends Component {
  deleteTask(name) {
    this.props.deleteItem(name)
  }
  completeTask(name) {
    this.props.completeTask(name)
  }
  render() {
    return (
      <ul>
        {
          this.props.data.map(element => {
            return (
              <li className="listItem" key={element.name}>
                <input type="checkbox"
                  checked={element.status === 1}
                  onChange={this.completeTask.bind(this, element.name)}/>
                <span style={{textDecorationLine: element.status === 0 ? 'none' : 'line-through'}}>{element.name}</span>
                <button className="delete" onClick={this.deleteTask.bind(this, element.name)}>删除</button>
              </li>)
        })
      }
      </ul>
    )
  }
}

class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      list: [{
        name: 'learn english', status: 0
      },{
        name: 'Learn guitar', status: 0
      }, {
        name: 'weight less than 100', status: 0
      }, {
        name: 'have 100,000 deposit', status: 0
      }],
      inputVal: ''
    }
  }
  addTask() {
    if (!this.state.inputVal) return
    this.setState({
      list: [...this.state.list, {
        name: this.state.inputVal,
        status: 0
      }],
      inputVal: ''
    })
  }
  handleChange(e) {
    this.setState({
      inputVal: e.target.value
    })
  }
  deleteItem(name) {
    const data = this.state.list.filter(element => element.name !== name)
    this.setState({
      list: data
    })
  }
  completeTask(name) {
    const TodoList = []
    this.state.list.forEach((element, index) => {
      if (element.name === name) {
        const item = this.state.list[index]
        TodoList.push(Object.assign({}, item, {status: item.status === 0 ? 1 : 0}))
        this.setState({
          list: TodoList
        })
      } else {
        TodoList.push(element)
      }
    })
  }
  render() {
    return (
      <div className="reactTodoList">
      <header className="header">React todo list</header>
      <ListItem data={this.state.list} deleteItem={this.deleteItem.bind(this)}
        completeTask={this.completeTask.bind(this)}/>
      <footer>
        <input type="text" value={this.state.inputVal} onChange={this.handleChange.bind(this)} placeholder="添加todo"></input>
        <button className="addTodo" onClick={this.addTask.bind(this)}>添加</button>
      </footer>
    </div>
    )
  }
}

export default TodoList;
