import React, { Component, Fragment } from 'react';

class Demo extends Component {
  render() {
    return (
      // Fragment标签会被React粉碎，只接受key一个属性
      <Fragment>
        <input type="text"/>
        <input type="text"/>
      </Fragment>
    );
  }
}

export default Demo;