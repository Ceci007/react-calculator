import React from 'react';
import '../index.css';
import Button from './Button';

const ButtonPannel = () => (
  <div>
    <div>
      <Button name="AC" size="simple" color="gray" />
      <Button name="+/-" size="simple" color="gray" />
      <Button name="%" size="simple" color="gray" />
      <Button name="÷" size="simple" color="orange" />
    </div>
    <div>
      <Button name="7" size="simple" color="gray" />
      <Button name="8" size="simple" color="gray" />
      <Button name="9" size="simple" color="gray" />
      <Button name="X" size="simple" color="orange" />
    </div>
    <div>
      <Button name="4" size="simple" color="gray" />
      <Button name="5" size="simple" color="gray" />
      <Button name="6" size="simple" color="gray" />
      <Button name="-" size="simple" color="orange" />
    </div>
    <div>
      <Button name="1" size="simple" color="gray" />
      <Button name="2" size="simple" color="gray" />
      <Button name="3" size="simple" color="gray" />
      <Button name="+" size="simple" color="orange" />
    </div>
    <div>
      <Button name="0" size="double" color="gray" />
      <Button name="." size="simple" color="gray" />
      <Button name="=" size="simple" color="orange" />
    </div>
  </div>
);

export default ButtonPannel;
