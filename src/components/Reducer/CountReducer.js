import React, { useReducer } from "react";

const initialState = {
  firstCount: 0,
  secondCount: 0,
};
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "addOne":
      return { ...state, firstCount: state.firstCount + action.value };
    case "decrement":
      return { ...state, firstCount: state.firstCount - action.value };
    case "addOne2":
      return { ...state, secondCount: state.secondCount + action.value };
    case "decrement2":
      return { ...state, secondCount: state.secondCount - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Reducer = () => {
  // 1 import useReducer()
  // 2 useReducer(reducer,initialState)
  // 3 return : [count , dispatch]
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>count is : {count.firstCount}</p>
      <p>count is : {count.secondCount}</p>
      <button onClick={() => dispatch({ type: "addOne", value: 1 })}>
        add one
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement
      </button>
      <br />
      <button onClick={() => dispatch({ type: "addOne2", value: 1 })}>
        add one
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default Reducer;
