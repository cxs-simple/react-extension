import React, { Component } from 'react';

class Demo extends Component {
  // 初始化状态
  state = {count : 0};

  increment = () => {
    /**
     * 对象式的setState
     */
    // 获取原来的count
    // const count = this.state.count;
    // // 更新状态
    // this.setState({count: count + 1}, () => {
    //   // setState的回调在状态更新完毕、界面也更新后(render调用后)才被调用
    //   console.log('13行输出的count值为：', this.state.count);
    // })
    // // setState方法是异步更新状态中的值
    // console.log('16行输出的count值为：', this.state.count);

    /**
     * 函数式的setState
     */
    // this.setState((state, props) => {
    //   return {count: state.count + 1}
    // })
    // 上记的简写方式
    this.setState(state => ({count: state.count + 1}))
  }

  render() {
    return (
      <div>
        <h1>当前求和值为：{this.state.count}</h1>
        <button onClick={this.increment}>点我+1</button>
      </div>
    );
  }
}

export default Demo;