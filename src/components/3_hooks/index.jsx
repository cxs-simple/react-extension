import React from 'react';
import ReactDOM from 'react-dom'

/** 类式组件 */
// class Demo extends React.Component {
//   // 初始化状态
//   state = {count: 0}

//   // 加的回调
//   increment= () => {
//     this.setState(state => ({count: state.count + 1}))
//   }

//   // 生命周期钩子
//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState(state => ({count: state.count + 1}))
//     }, 1000)
//   }

//   // 卸载的回调
//   unmount = () => {
//     this.timer = ReactDOM.unmountComponentAtNode(document.getElementById('root'));
//   }

//   // 组件将要卸载生命周期钩子
//   componentWillUnmount() {
//     // 清除定时器
//     clearInterval(this.timer);
//   }

//   render() {
//     return (
//       <div>
//         <h2>当前求和值为：{this.state.count}</h2>
//         <button onClick={this.increment}>点我 +1</button>
//         <button onClick={this.unmount}>点我卸载组件</button>
//       </div>
//     );
//   }
// }

/** 函数式组件 */
function Demo() {
  // 使用state hook处理状态
  const [count, setCount] = React.useState(0);

  // 加法的回调
  function increment() {
    // 参数为非函数值：直接指定新的状态值, 内部用其覆盖原来的状态值
    // setCount(count + 1);
    // 参数为函数: 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值
    setCount(count => count + 1);
  }

  // useEffect: 在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count + 1);
    }, 1000)
    // return的函数相当于类式组件中的componentWillUnmount钩子
    return () => {
      clearInterval(timer);
    }
    // 1.[]: 回调函数只会在第一次render()后执行，相当于componentDidMount钩子
    // 2.[stateValue]: 监听状态值，相当于componentDidMount与componentDidUpdate钩子
  }, []) 

  // 卸载回调
  function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  return (
    <div>
      <h2>当前求和值为：{count}</h2>
      <button onClick={increment}>点我 +1</button>
      <button onClick={unmount}>点我 卸载</button>
    </div>
  )
}

export default Demo;