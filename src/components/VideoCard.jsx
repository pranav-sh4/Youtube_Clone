import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function formatViews(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M views";
  if (n >= 1000) return (n / 1000).toFixed(1) + "K views";
  return n + " views";
}

export default function VideoCard({ video }) {
  const navigate = useNavigate();

  const open = () => navigate(`/watch/${video.id}`);

  return (
    <div className="video-card" role="article">
      <div style={{ text:+ video.duration, cursor: "pointer" }} onClick={open} >
        <img src={video.thumbnail }  alt={video.title} className="video-thumb" />
      </div>
      <div className="p-2 d-flex gap-2">
        <img src={video.channelAvatar} alt={video.channel} style={{ width: 40, height: 44, borderRadius: 999 }} />
        <div style={{ flex: 1 }}>
          <h6 style={{ margin: 0, fontSize: "0.95rem" }}>{video.title}</h6>
          <div className="muted" style={{ fontSize: ".85rem" }}>
            <div>{video.channel}</div>
            <div>{formatViews(video.views)} • {video.posted}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
