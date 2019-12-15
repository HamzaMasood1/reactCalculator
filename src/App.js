import React from "react";
import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
import Button from "./components/Button.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>/</Button>
          </div>
          <div className="row">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>*</Button>
          </div>
          <div className="row">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>
          </div>
          <div className="row">
            <Button>.</Button>
            <Button>0</Button>
            <Button>=</Button>
            <Button>-</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
