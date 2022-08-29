import React, { useContext } from "react";
import { useCount, useCountActions } from "./CounterProvider";

const CounterOne = () => {
  const count = useCount(); //state
  const dispatch = useCountActions(); //setState
  return (
    <div>
      <p>count is : {count}</p>
          <button onClick={() => dispatch({ type: "add", value:5})}>add one</button>
      <button onClick={() => dispatch({ type: "reset"})}>reset</button>
      <button onClick={() => dispatch({ type: "decrement", value:10})}>decrement</button>
    </div>
  );
};

export default CounterOne;
