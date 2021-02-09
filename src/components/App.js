import React from 'react';
import ButtonPannel from './ButtonPannel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      currentButton: null,
    };
  }

  handleClick(buttonName) {
    const newCalculations = calculate(this.state, buttonName);
    this.setState({ ...newCalculations, currentButton: buttonName });
  }

  render() {
    const { next, total, currentButton } = this.state;
    return (
      <div className="calculator">
        <Display currentButton={currentButton} result={next || total} />
        <ButtonPannel clickHandler={i => this.handleClick(i)} />
      </div>
    );
  }
}

export default App;
