import React, { useState } from "react";
import Todo from "./Todo";
import ThemeToggle from "./ThemeToggle";
import SimpleForm from "./SimpleForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>React SPA Experiments</h1>

      {/* Counter */}
      <h2>Simple Counter</h2>
      <h3>{count}</h3>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>

      {/* To-Do */}
      <Todo />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Simple Form */}
      <SimpleForm />
    </div>
  );
}

export default App;
