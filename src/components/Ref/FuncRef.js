import React, { Component, useRef, useEffect, useState } from "react";

const FuncRef = () => {
    const previousCount = useRef();
    const [count, setCount] = useState(0)
    
  useEffect(() => {
    previousCount.current =count
  },[count]);
  return (
    <>
      <button onClick={()=>setCount(Math.ceil(Math.random()*100))}>Random number</button>
      <p>count is {count}</p>
      <p>previous count {previousCount.current}</p>
    </>
  );
};

export default FuncRef;
