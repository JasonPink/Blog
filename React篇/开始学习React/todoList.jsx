import React, { Component } from "react";
import "./index.css";

class TodoItem extends Component {
  handler() {
    this.props.handler(this.props.index);
  }
  render() {
    return (
      <div>
        <li className={this.props.active ? 'active' : ''}>{this.props.text}</li>
        <button onClick={this.handler.bind(this)}>{this.props.active ? '撤销' : '完成'}</button>
      </div>
    );
  }
}

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      item: [],
      input: "",
    };
  }

  adddItem() {
    let item = {
      text: this.state.input,
      isActive: false,
    };
    this.setState({
      item: [...this.state.item, item],
      input: ''
    });
  }

  changeStatus(i) {
    console.log('index: ', i);
    let item = [...this.state.item]
    item[i].isActive = !item[i].isActive;
    console.log('item', item)
    this.setState({
      item: item,
    });
  }
  complete() {
    let list = this.state.item.filter(item => {
      return item.isActive
    });
    this.setState({
      item: list
    })
  }
  unComplete() {
    let list = this.state.item.filter(item => {
      return !item.isActive
    });
    this.setState({
      item: list
    })
  }

  render() {
    return (
      <div>
        <h3>TodoList:</h3>
        <div>
          <input
            type="text"
            value={this.state.input}
            onChange={(e) => this.setState({ input: e.target.value })}
          />
          <button onClick={() => this.adddItem()}>Add</button>
        </div>
        <ul>
          {this.state.item.map((item, index) => {
            return (
              <TodoItem
                key={index}
                text={item.text}
                active={item.isActive}
                index={index}
                handler={(i) => {
                  this.changeStatus(i);
                }}
              />
            );
          })}
        </ul>
        <div>
          <button>全部</button>
          <button onClick={() => this.complete()}>已完成</button>
          <button onClick={() => this.unComplete()}>未完成</button>
        </div>
      </div>
    );
  }
}

export default TodoList;
