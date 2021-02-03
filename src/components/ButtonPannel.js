import React from 'react';
import Button from './Button';

function ButtonPannel() {
  const propsBtns = [{ name: 'AC' },
    { name: '+/-' },
    { name: '%' },
    { name: '÷' },
    { name: '7' },
    { name: '8' },
    { name: '9' },
    { name: 'X' },
    { name: '4' },
    { name: '5' },
    { name: '6' },
    { name: '-' },
    { name: '1' },
    { name: '2' },
    { name: '3' },
    { name: '+' },
    { name: '0' },
    { name: '.' },
    { name: '=' }];

  const createPannelLine = (propsBtns, line) => {
    const result = [];
    let i = 0;
    let index = line * 4;
    while (i < 4 && index < (propsBtns.length)) {
      result.push(<Button
        key={index + 1}
        name={propsBtns[index].name}
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
