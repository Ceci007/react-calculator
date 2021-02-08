import { operate } from './operate';

export function calculate(calculator, buttonName) {
  const newCalc = {
    next: calculator.next,
    total: calculator.total,
    operation: calculator.operation,
  };
  switch (buttonName) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
      if (newCalc.next == null) newCalc.next = buttonName;
      else newCalc.next += buttonName;
      break;
    case '.':
      if (newCalc.next == null) {
        newCalc.next = '0.';
      } else if (!newCalc.next.includes('.')) {
        newCalc.next += buttonName;
      }
      break;
    case '+':
    case '-':
    case 'x':
    case '÷':
      if (newCalc.total == null) {
        newCalc.total = newCalc.next;
      } else {
        newCalc.total = operate(newCalc.next, newCalc.total, newCalc.operation);
      }
      newCalc.next = null;
      newCalc.operation = buttonName;
      break;
    case '%':
    case '+/-':
      newCalc.next = String(operate(newCalc.next, newCalc.total, buttonName));
      break;
    case '=':
      newCalc.next = String(operate(newCalc.next, newCalc.total, newCalc.operation));
      newCalc.total = null;
      newCalc.operation = null;
      break;
    case 'AC':
      newCalc.next = null;
      newCalc.total = null;
      newCalc.operation = null;
      break;
    default:
      if (newCalc.total == null) {
        newCalc.total = newCalc.next;
      } else {
        newCalc.total = operate(newCalc.next, newCalc.total, '+');
      }
      newCalc.next = null;
      newCalc.operation = buttonName;
      break;
  }
  return newCalc;
}

export default { calculate };
