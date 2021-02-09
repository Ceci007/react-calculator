const Big = require('big.js');

export function operate(numberOne, numberTwo, operation) {
  let result = 0;
  let x;
  let y;
  if (numberOne != null) {
    x = new Big(numberOne);
  }

  if (numberTwo != null) {
    y = new Big(numberTwo);
  }
  switch (operation) {
    case '+':
      result = y.plus(x);
      break;
    case '-':
      result = y.minus(x);
      break;
    case 'x':
      result = y.times(x);
      break;
    case '÷':
      result = y.div(x);
      break;
    case '%':
      result = x.div(100);
      break;
    case '+/-':
      result = x.times(-1);
      break;
    default:
      result = 0;
  }
  return result;
}

export default { operate };
