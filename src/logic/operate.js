import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const big1 = Big(numberOne);
  const big2 = Big(numberTwo);
  
  switch (operation) {
    case '%':
      if (big1.times(big2) === 0) {
        return '0';
      }
      return big1.times(big2).div(100).toString();
    case '÷':
      if (big1.toString() === '0' || big2.toString() === '0') {
        return 'Error Division by 0';
      }
      return big1.div(big2).toString();
    case 'x':
      return big1.times(big2).toString();
    case '-':
      return big1.minus(big2).toString();
    case '+':
      return big1.plus(big2).toString();
    default:
      return big1;
  }
};

export default operate;