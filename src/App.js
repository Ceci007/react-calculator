import React from 'react';
import Big from 'big.js';
import PropTypes from 'prop-types';
import './App.css';

const testBig = new Big('4.321e+4');
const bigMsg = `New Big('4.321e+4') is: ${testBig}`;

function App() {
  return (
    <div className="App">
      <Counter name="testName" />
    </div>
  );
}

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({
      count: 0,
    });
  }

  increment() {
    this.setState(state => ({
      count: state.count + 1,
    }));
  }

  decrement() {
    this.setState(state => ({
      count: state.count - 1,
    }));
  }

  render() {
    const { count } = this.state;
    const { name } = this.props;

    return (
      <div>
        <button type="button" className="inc" onClick={this.increment}>Increment!</button>
        <button type="button" className="dec" onClick={this.decrement}>Decrement!</button>
        <button type="button" className="reset" onClick={this.reset}>Reset</button>
        <h1>
          Current Count:
          {count}
        </h1>
        <h3>
          Prop name:
          {name}
        </h3>
        <h3>
          {bigMsg}
          {' '}
        </h3>
      </div>
    );
  }
}

Counter.propTypes = {
  name: PropTypes.string,
};

Counter.defaultProps = {
  name: '',
};

export default App;
