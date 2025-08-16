import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BsSearch, BsSun, BsMoon } from 'react-icons/bs';

export default function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <button className="btn btn-outline-secondary" onClick={toggle} >
      {theme === "light" ? <BsMoon/> : <BsSun/>}
    </button>
  );
}
