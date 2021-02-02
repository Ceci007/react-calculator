import React from 'react';
import '../index.css';
import Button from './Button';

function ButtonPannel() {
  const defaultSize = 'simple';
  const defaultColor = 'gray';
  const colorSecundary = 'orange';
  const doubleSize = 'double';
  const propsBtns = [{ name: 'AC', size: defaultSize, color: defaultColor },
    { name: '+/-', size: defaultSize, color: defaultColor },
    { name: '%', size: defaultSize, color: defaultColor },
    { name: '÷', size: defaultSize, color: colorSecundary },
    { name: '7', size: defaultSize, color: defaultColor },
    { name: '8', size: defaultSize, color: defaultColor },
    { name: '9', size: defaultSize, color: defaultColor },
    { name: 'X', size: defaultSize, color: colorSecundary },
    { name: '4', size: defaultSize, color: defaultColor },
    { name: '5', size: defaultSize, color: defaultColor },
    { name: '6', size: defaultSize, color: defaultColor },
    { name: '-', size: defaultSize, color: colorSecundary },
    { name: '1', size: defaultSize, color: defaultColor },
    { name: '2', size: defaultSize, color: defaultColor },
    { name: '3', size: defaultSize, color: defaultColor },
    { name: '+', size: defaultSize, color: colorSecundary },
    { name: '0', size: doubleSize, color: defaultColor },
    { name: '.', size: defaultSize, color: defaultColor },
    { name: '=', size: defaultSize, color: colorSecundary }];

  const createPannelLine = (propsBtns, line) => {
    const result = [];
    let i = 0;
    let index = line * 4;
    while (i < 4 && index < (propsBtns.length)) {
      result.push(<Button
        key={index + 1}
        name={propsBtns[index].name}
        color={propsBtns[index].color}
        size={propsBtns[index].size}
      />);
      i += 1;
      index += 1;
    }

    return (
      <div>
        { result.map(btn => btn) }
      </div>
    );
  };

  return (
    <div>
      { createPannelLine(propsBtns, 0) }
      { createPannelLine(propsBtns, 1) }
      { createPannelLine(propsBtns, 2) }
      { createPannelLine(propsBtns, 3) }
      { createPannelLine(propsBtns, 4) }
    </div>
  );
}

export default ButtonPannel;
