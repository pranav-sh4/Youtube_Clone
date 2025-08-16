import React from "react";

export default function Loader({ count = 6 }) {
  const boxes = Array.from({ length: count });
  return (
    <div className="row g-3">
      {boxes.map((_, i) => (
        <div className="col-12 col-md-6 col-lg-4" key={i}>
          <div className="video-card p-2">
            <div style={{ background: "#e9ecef", height: 160, borderRadius: 6 }} />
            <div style={{ height: 16, marginTop: 12, width: "60%", background: "#e9ecef", borderRadius: 6 }} />
            <div style={{ height: 12, marginTop: 8, width: "40%", background: "#f1f3f5", borderRadius: 6 }} />
          </div>
        </div>
      ))}
    </div>
  );
}
