import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../../redux/slices/themeSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Toggler.css";

const themes = [
  { name: "theme-default", label: "Default Theme", className: "toggle" },
  { name: "theme-one", label: "First Theme", className: "toggle-1" },
  { name: "theme-two", label: "Second Theme", className: "toggle-2" },
  { name: "theme-three", label: "Third Theme", className: "toggle-3" },
];

const Toggler = () => {
  const [themeToggle, setThemeToggle] = useState("theme-default");
  const dispatch = useDispatch();

  const toggleTheme = useCallback(
    (newTheme) => {
      document.body.className = "";
      if (newTheme) {
        document.body.classList.add(newTheme);
      }
      setThemeToggle(newTheme);
      dispatch(setTheme(newTheme));
    },
    [dispatch]
  );

  return (
    <div className="toggle-container">
      {themes.map((theme) => (
        <button
          key={theme.name}
          className={`toggle-btn ${theme.className}`}
          onClick={() => toggleTheme(theme.name)}
          aria-label={theme.label}
          aria-pressed={themeToggle === theme.name}
        />
      ))}
    </div>
  );
};

export default Toggler;
