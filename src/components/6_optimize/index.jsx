import React, { Component, PureComponent } from 'react';
import './index.css'

export default class Parent extends PureComponent {
  // 初始化状态
  state = {userName: 'Tom'};

  // 换名字的回调
  changeName = () => {
    this.setState({userName: 'Sam'})
    // this.setState({})
  }

  // shouldComponentUpdate生命周期狗子
  // shouldComponentUpdate(nextProps, nextState) {
    // 目前的props和state
    // console.log(this.props, this.state);
    // 接下来要变化的目标props和state
    // console.log(nextProps, nextState);
    // return !(nextState.userName === this.state.userName);
  // }

  render() {
    console.log('Parent---render');
    return (
      <div className='parent'>
        <h2>我是Parent组件</h2>
        <span>我的名字是：{this.state.userName}</span>
        <br />
        <button onClick={this.changeName}>点我换名字</button>
        <p></p>
        {/* <Child userName={this.state.userName}/> */}
        <Child userName='aaa'/>
      </div>
    );
  }
}

class Child extends Component {

  // shouldComponentUpdate生命周期狗子
  // shouldComponentUpdate(nextProps, nextState) {
    // 目前的props和state
    // console.log(this.props, this.state);
    // 接下来要变化的目标props和state
    // console.log(nextProps, nextState);
    // return !(nextProps.userName === this.props.userName);
  // }

  render() {
    console.log('Child---render');
    return (
      <div className='child'>
        <h2>我是Child组件</h2>
        <span>我接受到的用户名是：{this.props.userName}</span>
      </div>
    );
  }
}

