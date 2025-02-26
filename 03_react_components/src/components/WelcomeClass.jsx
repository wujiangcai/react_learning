import { Component } from "react";
import PropTypes from "prop-types";
class WelcomeClass extends Component {
  render() {
    // return (
    //   <>
    //     <h1>Hello World</h1>
    //   </>
    // );

    // 也可直接
    return <h1>Hello,{this.props.name}</h1>;
  }
}

WelcomeClass.propTypes = {
  name: PropTypes.string,
};
// 组件名称必须大写字母开头
export default WelcomeClass;
