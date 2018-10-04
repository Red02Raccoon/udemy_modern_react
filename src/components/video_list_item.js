import React from "react";

const VideoLlistItem = ({ video, onVideoSelect }) => {
  const imgUrl = video.snippet.thumbnails.default.url;
  const titleVideo = video.snippet.channelTitle;

  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imgUrl} alt="" />
        </div>
        <div className="media-body">
          <div className="media-hedding">{titleVideo}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoLlistItem;
