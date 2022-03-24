import React, { Component } from 'react';
import './index.css'

// 创建上下文context
const MyContext = React.createContext();

export default class A extends Component {
  // 初始化状态
  state = {username: 'Tom', age: 18};

  render() {
    // 解构赋值状态
    const {username, age} = this.state;
    return (
      <div className="parent">
        <h3>我是A组件</h3>
        <h4>我的用户名是：{username}</h4>
        {/* 向后代组件传递对象 */}
        <MyContext.Provider value={{username, age}}>
          <B/>
        </MyContext.Provider>
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div className="child">
        <h3>我是B组件</h3>
        <C/>
      </div>
    );
  }
}

// 类式组件
// class C extends Component {
//   // 声明接受上下文context
//   static contextType = MyContext

//   render() {
//     return (
//       <div className="grand">
//         <h3>我是C组件</h3>
//         <h4>我从A组件接收的用户名是：{this.context.username}, 年龄是{this.context.age}</h4>
//       </div>
//     );
//   }
// }

// 函数式组件
function C() {
  return (
    <div className="grand">
      <h3>我是C组件</h3>
      <h4>我从A组件接收的用户名是
        {/* 函数式组件：接收上下文context,使用Consumer */}
        <MyContext.Consumer>
          {
            value => {
              return `${value.username}, 年龄是${value.age}`
            }
          }
        </MyContext.Consumer>
      </h4>
    </div>
  );
}
