import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';

export function ButtonPanel(props) {
  return (
    <div>
      <div className="calculator__buttons">
        <Button buttonName="AC" onClick={() => props.onClick('AC')} dinamycClass="btn highlight" />
        <Button buttonName="+/-" onClick={() => props.onClick('+/-')} dinamycClass="btn highlight" />
        <Button buttonName="%" onClick={() => props.onClick('%')} dinamycClass="btn highlight" />
        <Button buttonName="÷" onClick={() => props.onClick('÷')} dinamycClass="btn highlight" />
      </div>
      <div className="calculator__buttons">
        <Button buttonName="7" onClick={() => props.onClick('7')} dinamycClass="btn" />
        <Button buttonName="8" onClick={() => props.onClick('8')} dinamycClass="btn" />
        <Button buttonName="9" onClick={() => props.onClick('9')} dinamycClass="btn" />
        <Button buttonName="x" onClick={() => props.onClick('x')} dinamycClass="btn highlight" />
      </div>
      <div className="calculator__buttons">
        <Button buttonName="4" onClick={() => props.onClick('4')} dinamycClass="btn" />
        <Button buttonName="5" onClick={() => props.onClick('5')} dinamycClass="btn" />
        <Button buttonName="6" onClick={() => props.onClick('6')} dinamycClass="btn" />
        <Button buttonName="-" onClick={() => props.onClick('-')} dinamycClass="btn highlight" />
      </div>
      <div className="calculator__buttons">
        <Button buttonName="1" onClick={() => props.onClick('1')} dinamycClass="btn" />
        <Button buttonName="2" onClick={() => props.onClick('2')} dinamycClass="btn" />
        <Button buttonName="3" onClick={() => props.onClick('3')} dinamycClass="btn" />
        <Button buttonName="+" onClick={() => props.onClick('+')} dinamycClass="btn highlight" />
      </div>
      <div className="calculator__buttons">
        <Button buttonName="0" onClick={() => props.onClick('0')} dinamycClass="btn" />
        <Button buttonName="." onClick={() => props.onClick('.')} dinamycClass="btn" />
        <Button buttonName="=" onClick={() => props.onClick('=')} dinamycClass="btn equal" />
        <Button buttonName="" />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default { ButtonPanel };
