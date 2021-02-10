import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const buttonsLabel = [
  { group: ['AC', '+/-', '%', '÷'], id: 'group-one' },
  { group: ['7', '8', '9', 'X'], id: 'group-two' },
  { group: ['4', '5', '6', '-'], id: 'group-three' },
  { group: ['1', '2', '3', '+'], id: 'group-four' },
  { group: ['0', '.', '=', ''], id: 'group-five' },
];

class ButtonPannel extends React.Component {
  renderButtonGroup({ group, key }) {
    const { clickHandler } = this.props;
    const buttonGroups = group.map(label => (
      <Button
        key={label}
        name={label}
        handleClick={() => clickHandler(label)}
      />
    ));
    return (
      <div key={key} className="calculator__buttons">
        {buttonGroups}
      </div>
    );
  }

  render() {
    const buttonPannel = buttonsLabel
      .map(({ group, id }) => this.renderButtonGroup({ group, id, key: id }));

    return buttonPannel;
  }
}

ButtonPannel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPannel;
