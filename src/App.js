import { useState, useEffect } from "react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Form from "./components/Form";
import { BsSun, BsMoon } from "react-icons/bs";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("counter");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved user preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply theme on initial load and when theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="app soft-bg">
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? <BsSun /> : <BsMoon />}
      </button>

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