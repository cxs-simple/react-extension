## 一. setState更新状态的俩种方式
  1. setState(stateChange, [callback])------对象式的setState
    - stateChange为状态改变对象(该对象可以体现出状态的更改)
    - callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用
  
  2. setState(updater, [callback])------函数式的setState
    - updater为返回stateChange对象的函数
    - updater可以接收到state和props
    - callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用
  
  3. 总结
    - 对象式的setState是函数式的setState的简写方式(语法糖)
    - 使用原则： (1) 如果新状态不依赖于原状态 ===> 使用对象方式
                (2) 如果新状态依赖于原状态 ===> 使用函数方式
                (3) 如果需要在setState()执行后获取最新的状态数据, 要在第二个callback函数中读取