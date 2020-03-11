import React, { Component } from 'react';
import './App.css';
import Button from "./Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleIncrement = value => {
    this.setState({ counter: this.state.counter + value });
  }

  render() {
    return (
      <div className="App">
        <Button onIncrement={this.handleIncrement} value={1} />
        <Button onIncrement={this.handleIncrement} value={10} />
        <Button onIncrement={this.handleIncrement} value={100} />
        <p>Counter value from state: {this.state.counter}</p>
      </div>
    );
  }
}

export default App;
