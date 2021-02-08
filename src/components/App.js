import React, { Component } from 'react';
import { Display } from './Display';
import { ButtonPannel } from './ButtonPannel';
import { calculate } from '../logic/calculate';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(buttonName) {
    let calcObject = this.state;
    calcObject = calculate(calcObject, buttonName);
    const { total, next, operation } = calcObject;
    this.setState({ total, next, operation });
  }

  render() {
    const { next, operation } = this.state;
    return (
      <div className="calculator">
        <Display numberDisplay={next} operation={operation} />
        <ButtonPannel onClick={buttonName => this.handleClick(buttonName)} />
      </div>
    );
  }
}

export default { App };
