import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

const Button = ({ name }) => (
  <button type="button">{ name }</button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
