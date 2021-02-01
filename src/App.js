import React from 'react';
import Big from 'big.js';
import PropTypes from 'prop-types';

const testBig = new Big('4.321e+4');
const bigMsg = `New Big('4.321e+4') is: ${testBig}`;

function App() {
  return (
    <div className="App">
      <Counter  name = { 'testName' }/>
    </div>
  );
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({
      count: 0
    });
  }

  increment() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }

  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }));
  }

  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count} </h1>
        <h3>Prop name: {this.props.name} </h3>
        <h3>{bigMsg} </h3>
      </div>
    );
  }
};


Counter.propTypes = {
  name: PropTypes.string
};

export default App;
