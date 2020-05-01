function handleNumber(state, action) {
  let last = state.equation[state.equation.length - 1];
  let ops = ['+', '-', '*', '/'];
  let equation = [...state.equation];
  // if equation is empty or last is an operator, push on to array
  if (state.equation.length === 0 || ops.indexOf(last) >= 0) {
    equation.push(action.num);
  } else {
    // if last is a number, concat it with that
    equation.pop();
    equation.push(last.concat('', action.num));
  }
  return { ...state, equation };
}

function handleOperator(state, action) {
  let last = state.equation[state.equation.length - 1];
  let ops = ['+', '-', '*', '/'];
  let equation = [...state.equation];
  if (state.equation.length === 0) {
    if (action.op === '-') {
      //make next element === '-'
      equation = ['-'];
    }
  } else if (ops.indexOf(last) >= 0) {
    //if the last element in the equation is an operator
    if (action.op === '-') {
      //make next element === '-'
      equation.push('-');
    } else {
      //replace last element with new operator
      equation.pop();
      equation.push(action.op);
    }
  } else if (ops.indexOf(last) < 0) {
    //if the last element in the equation is not an operator
    equation.push(action.op);
  }
  return { ...state, equation };
}
function handleDecimal(state, action) {
  let last = state.equation[state.equation.length - 1];
  let equation = [...state.equation];
  // if last element has a decimal in it
  if (last.indexOf('.') < 0) {
    equation.pop();
    equation.push(last.concat('', '.'));
  }

  return { ...state, equation };
}
function calculateResult(state, action) {
  let formula = [...state.equation];
  //handle negative numbers first
  formula.forEach((val, i) => {
    let elementBefore = formula[i - 1];
    let ops = ['+', '-', '*', '/'];
    if (val === '-' && ops.indexOf(elementBefore) >= 0) {
      let negativeNum = '-'.concat('', formula[i + 1]);
      formula.splice(i, 2, negativeNum);
    }
  });
  let operations = {
    '*': (arr, i) => {
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

  evaluate(formula, '*', '/');
  evaluate(formula, '+', '-');
  let result = formula[0];
  return { ...state, result, equation: [] };
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
        result: 0
      };
    default:
      return state;
  }
};
