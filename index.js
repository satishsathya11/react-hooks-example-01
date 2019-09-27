import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import {Counter, TextInputWithFocusButton} from "./hooks";
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React Hooks'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <div className="counter">
          <h3>:using useReducer hook.</h3>
          <Counter />
        </div>
        <div className="focus">
          <h3>:using useRef  hook.</h3>
          <TextInputWithFocusButton />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
