import operate from './operate';

const calculate = (data, btnName) => {
  const { total, next, operation, tempOp } = data;

  switch (btnName) {
    case 'AC':
      return {
        total: 0,
        next: null,
        operation: null,
        tempOp: false,
      };
    case '+/-':
      if (next) return { total, next: next * -1, operation, tempOp: false };
      return { total: total * -1, next, operation: null, tempOp: false };
    case '+':
    case '-':
    case '÷':
    case '×':
    case '%':
      if (next && operation) {
        return {
          total: operate(total, next, operation),
          next: null,
          operation: btnName,
          tempOp: false,
        };
      }
      return { total, next: null, operation: btnName, tempOp: false };
    case '=':
      if (operation)
        return {
          total: operate(total, next, operation),
          next: null,
          operation: null,
          tempOp: true,
        };
      return { total, next: null, operation: null, tempOp: true };
    case '.':
      if (next) {
        return { total, next: `${next}.`, operation, tempOp: false };
      }
      if (total) {
        return { total: `${total}.`, next, operation, tempOp: false };
      }
      return { total: '0.', next, operation };
    default:
      if (operation) return { total, next: next ? next + btnName : btnName, operation };
      if (tempOp) return { total: btnName, next, operation, tempOp: false };
      return { total: total ? total + btnName : btnName, next, operation };
  }
};

export default calculate;