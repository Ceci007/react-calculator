import React from 'react';
import PropTypes from 'prop-types';

export function Button(props) {
  const {
    buttonName, onClick, dinamycClass = 'btn',
  } = props;
  return (
    <button
      type="button"
      className={dinamycClass}
      onClick={onClick}
    >
      { buttonName }
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  dinamycClass: PropTypes.string,
};

Button.defaultProps = {
  dinamycClass: 'btn',
};

export default { Button };
