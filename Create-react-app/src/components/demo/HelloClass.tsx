// 实现一个类组件
import React, { Component } from "react";
import { Button } from "antd";

interface Greeting {
  name: string;
  firstName?: string;
  lastName?: string;
}

interface HelloState {// 接口定义一个状态
  count: number;
}

class HelloClass extends Component<Greeting, HelloState> {
  // 第一个参数是props属性类型，默认为空对象；第二个参数为state状态类型，默认也是空对象
  state: HelloState = { // 初始化状态
    count: 0
  };
  static defaultProps = { // 定义类的默认属性值，作为类的静态成员存在
    firstName: "",
    lastName: ""
  };
  render() {
    return (
      <>
        <p>你点击了 {this.state.count} 次</p>
        <Button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
            Hello {this.props.name}
        </Button>
      </>
    );
  }
}
export default HelloClass;
