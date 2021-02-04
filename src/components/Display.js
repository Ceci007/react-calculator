import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div className="calculator__screen">
    <h5 className="calculator__result">
      {result}
    </h5>
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
