import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, handleClick }) => (
  <button
    type="button"
    id={`button-${name}`}
    onClick={handleClick}
    className="btn"
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default Button;
