import React from 'react';
import Display from './Display';
import ButtonPannel from './ButtonPannel';
import "../index.css";

const App = () => (
  <div className="calculator">
    <Display />
    <ButtonPannel />
  </div>
);

export default App;
