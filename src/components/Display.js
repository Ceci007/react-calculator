import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result, currentButton }) => (
  <div className="calculator__screen">
    <div className="calculator__operation">{currentButton}</div>
    <div className="calculator__result">
      {result || '0'}
    </div>
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
  currentButton: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
  currentButton: '',
};

export default Display;
