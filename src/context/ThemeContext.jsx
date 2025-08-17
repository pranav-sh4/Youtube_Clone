import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try{
      return localStorage.getItem("yt-theme") || "light";
    }catch{
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
    try { localStorage.setItem("yt-theme", theme); } catch {}
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
  <ThemeContext.Provider value={{ theme, toggle }}>
    {children}
  </ThemeContext.Provider>)
};
