import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import { BsSearch } from "react-icons/bs";

function Header() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    const trimmed = q.trim();
    if (trimmed) navigate(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  return (
    <header className="header border-bottom d-flex align-items-center justify-content-between px-3">
      <button className="btn d-flex align-items-center"
        onClick={() => navigate("/")}>
        <img src="/src/assets/images/youtube-color-svgrepo-com.svg" alt="YouTube logo"
          width="30" height="30"
          className="me-1"
        />
        <strong style={{ fontSize: 20, color: "red" }}>YouTube</strong>
      </button>

      <form onSubmit={onSearch} className="d-flex mx-auto"
        style={{ maxWidth: 600, flex: 1, justifyContent: "center" }}
        role="search"
      >
        <input className="form-control" placeholder="Search" value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Search videos"
        />
        <button className="btn btn-outline-secondary" type="submit">
          <BsSearch />
        </button>
      </form>

      <div className="d-flex align-items-center" style={{ gap: 12 }}>
        <ThemeToggle />
        <img src="/src/assets/images/user-profile-svgrepo-com.svg" alt="user"
          style={{ width: 36, height: 36, borderRadius: 999 }}
        />
      </div>
    </header>
  );
}

export default Header;