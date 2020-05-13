function handleNumber(state, action) {
  if ([...state.equation].join('').length >= 13) {
    return { ...state, maxInput: true, result: null };
  }
  let last = state.equation[state.equation.length - 1];
  let ops = ['+', '-', 'x', '/'];
  let equation = [...state.equation];
  // handle zeros first
  if (
    (+action.num === 0 && state.equation.length === 0) ||
    (+action.num === 0 && ops.indexOf(last) >= 0)
  ) {
    return { ...state, equation, result: null };
  } else if (state.equation.length === 0 || ops.indexOf(last) >= 0) {
    // if equation is empty or last is an operator, push on to array
    equation.push(action.num);
  } else {
    // if last is a number, concat it with that
    equation.pop();
    if (+last === 0 && last !== '0.') {
      equation.push(action.num);
    } else {
      equation.push(last.concat('', action.num));
    }
  }
  return { ...state, equation, result: null };
}
function handleOperator(state, action) {
  if ([...state.equation].join('').length >= 13) {
    return { ...state, maxInput: true, result: null };
  }
  let last = state.equation[state.equation.length - 1];
  let ops = ['+', '-', 'x', '/'];
  let equation = [...state.equation];
  // if equation is empty, use result
  if (state.equation.length === 0) {
    if (state.result) {
      equation.push(state.result);
      equation.push(action.op);
    } else if (action.op === '-') {
      equation.push('-');
    }
  } else if (ops.indexOf(last) >= 0) {
    //if the last element in the equation is an operator
    if (action.op === '-' && last !== '-') {
      equation.push('-');
    } else {
      //replace last element with new operator and check if there's another operator
      equation.pop();
      if (ops.indexOf(equation[equation.length - 1]) >= 0) {
        equation.pop();
      }
      equation.push(action.op);
    }
  } else if (ops.indexOf(last) < 0) {
    //if the last element in the equation is not an operator
    equation.push(action.op);
  }
  return { ...state, equation, result: null };
}
function handleDecimal(state) {
  if ([...state.equation].join('').length >= 13) {
    return { ...state, maxInput: true, result: null };
  }
  let last = state.equation[state.equation.length - 1];
  let equation = [...state.equation];
  if (equation.length === 0 || !+last) {
    // if equation is empty or last isn't a number (except zero)
    if (+last === 0) {
      equation.pop();
    }
    equation.push('0.');
  } else if (+last && last.indexOf('.') < 0) {
    // if last is a number without a decimal
    equation.pop();
    equation.push(last.concat('', '.'));
  }
  return { ...state, equation, result: null };
}
function calculateResult(state) {
  if (state.equation.length === 0) {
    return { ...state };
  }
  let formula = [...state.equation];
  let ops = ['+', '-', 'x', '/'];
  //if last input is an operator, pop off
  if (ops.indexOf(formula[formula.length - 1]) >= 0) {
    formula.pop();
  }
  //handle negative numbers first
  formula.forEach((val, i) => {
    let elementBefore = formula[i - 1];
    if (
      (val === '-' && !elementBefore) ||
      (val === '-' && ops.indexOf(elementBefore) >= 0)
    ) {
      let negativeNum = '-'.concat('', formula[i + 1]);
      formula.splice(i, 2, negativeNum);
    }
  });
  //if formula is one element
  if (formula.length === 1) {
    return { ...state, result: formula[0], equation: [], maxInput: false };
  }
  let operations = {
    x: (arr, i) => {
      arr.splice(i - 1, 3, +arr[i - 1] * +arr[i + 1]);
    },
    '/': (arr, i) => {
      arr.splice(i - 1, 3, +arr[i - 1] / +arr[i + 1]);
    },
    '+': (arr, i) => {
      arr.splice(i - 1, 3, +arr[i - 1] + +arr[i + 1]);
    },
    '-': (arr, i) => {
      arr.splice(i - 1, 3, +arr[i - 1] - +arr[i + 1]);
    },
  };
  function evaluate(arr, firstOp, secondOp) {
    for (let i = 0; i < formula.length; i++) {
      if (arr[i] === firstOp) {
        operations[firstOp](arr, i);
      }
      if (arr[i] === secondOp) {
        operations[secondOp](arr, i);
      }
    }
  }
  while (formula.length > 1) {
    evaluate(formula, 'x', '/');
    evaluate(formula, '+', '-');
  }
  let result = parseFloat(formula[0].toFixed(4));
  return { ...state, result, equation: [], maxInput: false };
}

function backspace(state) {
  let equation = [...state.equation];
  equation.pop();
  return { ...state, equation, maxInput: false, result: null };
}

export default (state, action) => {
  switch (action.type) {
    case 'HANDLE_NUMBER':
      return handleNumber(state, action);
    case 'HANDLE_OPERATOR':
      return handleOperator(state, action);
    case 'HANDLE_DECIMAL':
      return handleDecimal(state);
    case 'CALCULATE_RESULT':
      return calculateResult(state);
    case 'CLEAR':
      return {
        ...state,
        equation: ['0'],
        result: null,
        maxInput: false,
      };
    case 'BACKSPACE':
      return backspace(state);
    default:
      return state;
  }
};
