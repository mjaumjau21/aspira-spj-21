import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.setState({ counter: this.state.counter + 1 });
  }

  handleDecrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simple React example</h1>
          <button onClick={this.handleIncrement}>INCREMENT</button>
          <button onClick={this.handleDecrement}>DECREMENT</button>
        </header>
        <p className="App-intro">Counter value from state: {this.state.counter}</p>
      </div>
    );
  }
}

export default App;
