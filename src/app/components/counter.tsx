"use client";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  function increaseCounter(mutiplier: number = 1) {
    setCounter((value) => value + 1 * mutiplier);
  }
  return (
    <div>
      <h1>Counter</h1>
      <p>This is a simple example of a React component.</p>
      {counter}
      <input id="multi" type="number" onChange={(e) => setMultiplier(Number(e.target.value))} />
      <p>
        <button onClick={() => increaseCounter(multiplier)}>Click me!</button>
      </p>
    </div>
  );
}
