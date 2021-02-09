import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

const Calculator = () => (
  <div>
    <App />
  </div>
);

ReactDOM.render(<Calculator />, document.getElementById('root'));
