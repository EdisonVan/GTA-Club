import React, { Component } from "react";
import "./index.less";
interface Home {}
interface State {
  home: string;
}
class Index extends Component<Home, State> {
  state: State = {
    home: "首页"
  };
  static defaultProps = {
    firstName: "",
    lastName: ""
  };
  componentDidMount() {
    console.log(this.state.home);
  }
  render() {
    return <>{this.state.home}</>;
  }
}
export default Index;
