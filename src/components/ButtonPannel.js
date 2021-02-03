import React from 'react';
import Button from './Button';

const ButtonPannel = () => {
  const propsBtns = [{ name: 'AC', dynamicClass: 'btn highlight' },
    { name: '+/-', dynamicClass: 'btn highlight' },
    { name: '%', dynamicClass: 'btn highlight' },
    { name: '÷', dynamicClass: 'btn highlight' },
    { name: '7', dynamicClass: 'btn' },
    { name: '8', dynamicClass: 'btn' },
    { name: '9', dynamicClass: 'btn' },
    { name: 'X', dynamicClass: 'btn highlight' },
    { name: '4', dynamicClass: 'btn' },
    { name: '5', dynamicClass: 'btn' },
    { name: '6', dynamicClass: 'btn' },
    { name: '-', dynamicClass: 'btn highlight' },
    { name: '1', dynamicClass: 'btn' },
    { name: '2', dynamicClass: 'btn' },
    { name: '3', dynamicClass: 'btn' },
    { name: '+', dynamicClass: 'btn highlight' },
    { name: '0', dynamicClass: 'btn' },
    { name: '.', dynamicClass: 'btn highlight' },
    { name: '=', dynamicClass: 'btn equal' },
    { name: '' },
  ];

  const createPannelLine = (propsBtns, line) => {
    const result = [];
    let i = 0;
    let index = line * 4;
    while (i < 4 && index < (propsBtns.length)) {
      result.push(
        <Button
          key={index + 1}
          name={propsBtns[index].name}
          dynamicClass={propsBtns[index].dynamicClass}
        />,
      );
      i += 1;
      index += 1;
    }

    return (
      <div className="calculator__buttons">
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
};

export default ButtonPannel;
