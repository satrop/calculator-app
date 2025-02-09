"use client";

import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="toggle-container flex items-center justify-between">
      <h1 className="text-color transition duration-300 font-bold text-[32px]">calc</h1>
      <span className="text-color transition duration-300 mt-auto ml-auto mr-7 uppercase">Theme</span>
      <div className="button-container flex items-center flex-col">
        <ul className="text-color transition duration-300 text-xs mb-1 flex items-center justify-between w-full px-3">
          <li aria-label="Theme 1">1</li>
          <li aria-label="Theme 2">2</li>
          <li aria-label="Theme 3">3</li>
        </ul>
        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "Dark" : theme === "alt" ? "Light" : "Alt"} Theme`}
          className={`theme-toggler rounded-full w-[71px] h-[26px] flex items-center justify-center transition duration-300
            ${
              theme === "dark"
              ? "bg-theme1-toggleBg"
              : theme === "light"
              ? "bg-theme2-toggleBg"
              : "bg-theme3-toggleBg"
            }`}>
          {theme === "light" && <div className="sr-only">Switch to Dark</div>}
          {theme === "alt" && <div className="sr-only">Switch to Light</div>}
          {theme === "dark" && <div className="sr-only">Switch to Alt</div>}
          <div
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              theme === "dark"
            ? "-translate-x-5  bg-theme1-toggleBtn"
            : theme === "light"
            ? "translate-x-0 bg-theme2-toggleBtn"
            : "translate-x-5 bg-theme3-toggleBtn"
            }`}
          ></div>
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;
