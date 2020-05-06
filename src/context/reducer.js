function handleNumber(state, action) {
  if ([...state.equation].join('').length >= 15) {
    return { ...state, maxInput: true };
  }
  let last = state.equation[state.equation.length - 1];
  let ops = ['+', '-', 'x', '/'];
  let equation = [...state.equation];

  // need to handle zeroes
  if (
    (+action.num === 0 && state.equation.length === 0) ||
    (+action.num === 0 && ops.indexOf(last) >= 0)
  ) {
    return { ...state, equation };
  } else if (state.equation.length === 0 || ops.indexOf(last) >= 0) {
    // if equation is empty or last is an operator, push on to array
    equation.push(action.num);
  } else {
    // if last is a number, concat it with that
    equation.pop();
    equation.push(last.concat('', action.num));
  }
  return { ...state, equation };
}

function handleOperator(state, action) {
  if ([...state.equation].join('').length >= 15) {
    return { ...state, maxInput: true };
  }
  let last = state.equation[state.equation.length - 1];
  let ops = ['+', '-', 'x', '/'];
  let equation = [...state.equation];
  // use result if equation is empty
  if (state.result && state.equation.length === 0) {
    equation.push(state.result);
    equation.push(action.op);
  } else if (state.equation.length === 0 && action.op === '-') {
    //make next element === '-'
    equation = ['-'];
  } else if (ops.indexOf(last) >= 0) {
    //if the last element in the equation is an operator
    if (action.op === '-') {
      //make next element === '-'
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
  return { ...state, equation };
}
function handleDecimal(state, action) {
  if ([...state.equation].join('').length >= 15) {
    return { ...state, maxInput: true };
  }
  let last = state.equation[state.equation.length - 1];
  let equation = [...state.equation];
  // if last element has a decimal in it
  if (equation.length === 0 || !+last) {
    equation.push('0.');
  }
  if (+last && last.indexOf('.') < 0) {
    equation.pop();
    equation.push(last.concat('', '.'));
  }

  return { ...state, equation };
}
function calculateResult(state, action) {
  let formula = [...state.equation];
  let ops = ['+', '-', 'x', '/'];
  //if last entry is an operator, pop off
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
  //if formula is one input
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
    }
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

function backspace(state, action) {
  let equation = [...state.equation];
  equation.pop();
  return { ...state, equation, maxInput: false };
}

export default (state, action) => {
  switch (action.type) {
    case 'HANDLE_NUMBER':
      return handleNumber(state, action);
    case 'HANDLE_OPERATOR':
      return handleOperator(state, action);
    case 'HANDLE_DECIMAL':
      return handleDecimal(state, action);
    case 'CALCULATE_RESULT':
      return calculateResult(state, action);
    case 'CLEAR':
      return {
        ...state,
        equation: [],
        result: 0,
        maxInput: false
      };
    case 'BACKSPACE':
      return backspace(state, action);
    default:
      return state;
  }
};
