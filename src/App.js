import { useState } from "react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("counter");

  return (
    <div className="app soft-bg">
      {/* Heading */}
      <h1 className="main-title">React SPA Experiments</h1>

      {/* Navigation buttons */}
      <div className="nav-tabs">
        <button
          className={activeTab === "counter" ? "active" : ""}
          onClick={() => setActiveTab("counter")}
        >
          Counter
        </button>

        <button
          className={activeTab === "todo" ? "active" : ""}
          onClick={() => setActiveTab("todo")}
        >
          To-Do
        </button>

        <button
          className={activeTab === "form" ? "active" : ""}
          onClick={() => setActiveTab("form")}
        >
          Form
        </button>
      </div>

      {/* Center content */}
      <div className="content-box">
        {activeTab === "counter" && <Counter />}
        {activeTab === "todo" && <Todo />}
        {activeTab === "form" && <Form />}
      </div>
    </div>
  );
}

export default App;
