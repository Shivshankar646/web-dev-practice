import { useState } from "react";

function Counter() {
  // Step 1: Create state variable
  const [count, setCount] = useState(0);

  // Step 2: Function to update state
  const increase = () => (count + 1);
  const decrease = () => (count - 1);
  const reset = () => (0);

  // Step 3: Return UI
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🔥 useState Hook Example</h1>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease} style={{ margin: "0 10px" }}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
