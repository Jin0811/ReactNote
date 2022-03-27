import React, { Component } from 'react';

class componentName extends Component {

  // 增加
  increment = () => {
    const { value } = this.selectNumber;
    this.props.increment(value*1);
  }
  // 减少
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.decrement(value*1);
  }
  // 当前求和为奇数时再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    const { count } = this.props;
    if(count % 2 !== 0){
      this.props.increment(value*1);
    }
  }
  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.incrementAsync(value*1, 500);
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{ this.props.count }</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>增加</button>
        <button onClick={this.decrement}>减少</button>
        <button onClick={this.incrementIfOdd}>当前求和为奇数时再加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}

export default componentName;