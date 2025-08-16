import React from "react";
import { useLocation } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { videos } from "../assets/videos";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResultsPage() {
  const q = useQuery().get("q") || "";
  const query = q.trim().toLowerCase();

  const filtered = videos.filter((v) => {
    return v.title.toLowerCase().includes(query) || v.channel.toLowerCase().includes(query);
  });

  return (
    <div>
      <h5>Search results for: "{q}"</h5>
      {filtered.length === 0 ? (
        <div className="muted">No results found</div>
      ) : (
        <div className="row g-3 mt-2">
          {filtered.map((v) => (
            <div key={v.id} className="col-12 col-md-6 col-lg-4">
              <VideoCard video={v} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
