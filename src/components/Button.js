import React from "react";
import "./Button.css";
import { render } from "@testing-library/react";

class Button extends React.Component {
  isOPerator = val => {
    return !isNaN(val) || val === "." || val === "=";
  };

  render() {
    return (
      <div
        className={`button $ {this.operator(this.props.children) ? "" : "operator"}`}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Button;
 