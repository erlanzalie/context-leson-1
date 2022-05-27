import React, { useContext } from "react";
import { counterContext } from "../../counterContext";

const Counter2 = () => {
  const { counter2 } = useContext(counterContext);
  console.log(counter2);
  return (
    <div>
      <button onClick={() => minus10()}>-10</button>
      <h1>{counter2}</h1>
      <button onClick={() => plus10()}>+10</button>
    </div>
  );
};

export default Counter2;
