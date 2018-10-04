import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const url = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url} className="embed-responsive-item" />
      </div>
      <div className="details">
        <div className="details__title">{video.snippet.title}</div>
        <div className="details__desc">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
