import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { videos } from "../assets/videos";
import { ThemeContext } from "../context/ThemeContext";

export default function RelatedVideos({ currentId }) {
  const { theme } = useContext(ThemeContext);
  const list = videos.filter((v) => v.id !== currentId);

  return (
    <div>
      <h6 className={theme === "dark" ? "text-light" : "text-dark"}>Up next</h6>
      <div className={`list-group ${theme === "dark" ? "bg-dark" : ""}`}>
        {list.map((v) => (
          <Link to={`/watch/${v.id}`} key={v.id}
            className={`list-group-item list-group-item-action d-flex gap-2 align-items-center ${
              theme === "dark" ? "bg-dark text-light border-secondary" : "" }`}>
            <img src={v.thumbnail}  alt={v.title}
              style={{ width: 120, height: 70, objectFit: "cover", borderRadius: 4,}}/>
            <div>
              <div style={{ fontSize: ".95rem" }}>{v.title}</div>
              <div className={theme === "dark" ? "text-secondary" : "text-muted"}
                style={{ fontSize: ".8rem" }}>{v.channel}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
