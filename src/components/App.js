import React from 'react';
import Display from './Display';
import ButtonPannel from './ButtonPannel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';
import '../index.css';

const App = () => (
  <div className="calculator">
    <Display />
    <ButtonPannel />
  </div>
);

export default App;
