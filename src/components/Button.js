import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, dynamicClass = 'btn' }) => (
  <button type="button" className={`${dynamicClass}`}>{ name }</button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  dynamicClass: PropTypes.string,
};

Button.defaultProps = {
  dynamicClass: 'btn',
};

export default Button;
