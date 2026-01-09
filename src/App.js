import React, { useState } from "react";
import Todo from "./Todo";

function App() {
  // Experiment-1: Counter
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>React SPA Experiments</h1>

      {/* Experiment-1 */}
      <h2>Experiment-1: Simple Counter SPA</h2>
      <h3>{count}</h3>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>

      {/* Experiment-2 */}
      <Todo />
    </div>
  );
}

export default App;
