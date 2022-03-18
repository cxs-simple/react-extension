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
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'));
//     // this.timer.
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
    setInterval(() => {
      setCount(count => count + 1);
    }, 1000)
  }, [])

  return (
    <div>
      <h2>当前求和值为：{count}</h2>
      <button onClick={increment}>点我 +1</button>
    </div>
  )
}

export default Demo;