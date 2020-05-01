import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
  equation: [],
  result: null
};

export const CalcContext = createContext(initialState);

export const CalcProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // functions
  function handleNumber(num) {
    dispatch({
      type: 'HANDLE_NUMBER',
      num
    });
  }
  function handleOperator(op) {
    dispatch({
      type: 'HANDLE_OPERATOR',
      op
    });
  }
  function handleDecimal() {
    dispatch({
      type: 'HANDLE_DECIMAL'
    });
  }
  function calculateResult() {
    dispatch({
      type: 'CALCULATE_RESULT'
    });
  }
  function clear() {
    dispatch({
      type: 'CLEAR'
    });
  }

  return (
    <CalcContext.Provider
      value={{
        equation: state.equation,
        result: state.result,
        handleNumber,
        handleOperator,
        handleDecimal,
        calculateResult,
        clear
      }}
    >
      {children}
    </CalcContext.Provider>
  );
};
