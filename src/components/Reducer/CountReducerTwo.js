import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "addOne":
      return state+action.value;
    case "decrement":
      return state-action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const ReducerTwo = () => {
  // 1 import useReducer()
  // 2 useReducer(reducer,initialState)
  // 3 return : [count , dispatch]
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <p>count is : {count}</p>
      <p>count is : {countTwo}</p>
      <button onClick={() => dispatch({ type: "addOne", value: 1 })}>
        add one
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <br />
      <button onClick={() => dispatchTwo({ type: "addOne", value: 1 })}>
        add one
      </button>
      <button onClick={() => dispatchTwo({ type: "decrement", value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatchTwo({ type: "reset" })}>reset</button>
    </div>
  );
};

export default ReducerTwo;
