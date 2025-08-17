import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { videos } from "../assets/videos";
import RelatedVideos from "../components/RelatedVideos";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

export default function VideoDetailsPage() {
  const { id } = useParams();
  const video = videos.find((v) => v.id === id);
  const navigate = useNavigate();

  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  useEffect(() => {
    if (video) {
      const storedData = JSON.parse(localStorage.getItem(`video-${video.id}`));
      if (storedData) {
        setLikes(storedData.likes || 0);
        setLiked(storedData.liked || false);
        setDisliked(storedData.disliked || false);
      } else {
        setLikes(video.likes || 0);
        setLiked(false);
        setDisliked(false);
      }
    }
  }, [video]);

  useEffect(() => {
    if (video) {
      localStorage.setItem(
        `video-${video.id}`,
        JSON.stringify({ likes, liked, disliked })
      );
    }
  }, [likes, liked, disliked, video]);

  if (!video) {
    return (
      <div>
        <h3>Video not found</h3>
        <button className="btn btn-outline-primary" onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      if (disliked) {
        setDisliked(false);
      }
      setLiked(true);
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setDisliked(false);
    } else {
      if (liked) {
        setLikes(likes - 1);
        setLiked(false);
      }
      setDisliked(true);
    }
  };

  return (
    <div className="row">
      <div className="col-12 col-lg-8">
        <div className="video-container" >
          <img src={video.thumbnail} alt={video.title} style={{ width: "100%", height: 360, objectFit: "cover" }}/>
        </div>

        <div className="mt-3">
          <h5>{video.title}</h5>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <img src={video.channelAvatar} alt={video.channel} style={{ width: 48, height: 48, borderRadius: 999 }} />
              <div>
                <div>{video.channel}</div>
                <div className="muted">
                  {video.views} views | {video.posted}
                </div>
              </div>
            </div>
            <div>
              <div className="mt-2 d-flex gap-3 align-items-center">
                <button className={`btn ${liked ? "btn-success" : "btn-outline-secondary"}`}
                  onClick={handleLike}> <FaThumbsUp/> {likes}
                </button>
                <button className={`btn ${disliked ? "btn-danger" : "btn-outline-secondary"}`}
                  onClick={handleDislike}> <FaThumbsDown/> {}
                </button>
                <button className="btn btn-outline-danger">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="mt-3 p-3" style={{ background: "rgba(0,0,0,0.03)", borderRadius: 6 }}>
            <div className="muted">Description</div>
            <p>{video.description}</p>
          </div>

          <div className="mt-3">
            <h6>Comments</h6>
            {video.comments.length === 0 && (
              <div className="muted">No comments yet.</div>
            )}
            {video.comments.map((c) => (
              <div key={c.id} className="border rounded p-2 mb-2">
                <strong>{c.user}</strong>
                <div>{c.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-12 col-lg-4">
        <RelatedVideos currentId={video.id} />
      </div>
    </div>
  );
}
