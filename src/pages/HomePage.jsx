import React, { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";
import { videos as mockVideos } from "../assets/videos";

function HomePage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVideos(mockVideos);
      setLoading(false);
    }, 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div>
      <h4>Trending</h4>
      {loading ? (
        <Loader />
      ) : (
        <div className="row g-3">
          {videos.map((v) => (
            <div key={v.id} className="col-12 col-md-6 col-lg-4">
              <VideoCard video={v} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default HomePage;