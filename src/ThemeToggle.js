import React, { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const themeStyle = {
    backgroundColor: darkMode ? "#222" : "#f5f5f5",
    color: darkMode ? "white" : "black",
    padding: "20px",
    marginTop: "40px",
    borderRadius: "10px"
  };

  return (
    <div style={themeStyle}>
      <h2>Theme Toggle SPA</h2>

      <p>
        Current Theme: <b>{darkMode ? "Dark Mode" : "Light Mode"}</b>
      </p>

      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;