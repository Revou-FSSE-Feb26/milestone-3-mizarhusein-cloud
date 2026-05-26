"use client";

import { useState } from "react";
import ButtonPlus from "./ButtonPlus";

// function Counter() {
//   const [number, setNumber] = useState(0);
//   return (
//     <>
//       <h1>total {number}</h1>
//     </>
//   );
// }

const Counter = () => {
  const [number, setNumber] = useState(1);
  console.log("number", number);

  const handleMinus = () => {
    // function hanya bisa minus ketika nilainya lebih dari 1
    if (number > 1) {
      setNumber(number - 1);
    }
  };
  return (
    <>
      <h1>total {number}</h1>
      {/* <button onClick={() => setNumber(number + 1)}>+</button> */}
      <ButtonPlus handlePlus={() => setNumber(number + 1)} />
      <button onClick={handleMinus}>-</button>
    </>
  );
};

export default Counter;
