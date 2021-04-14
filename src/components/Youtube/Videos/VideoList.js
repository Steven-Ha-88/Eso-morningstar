import React from "react";
import VideoItem from "./VideoItem";
import "./styles.css";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => (
    <VideoItem
      key={video.node.id}
      onVideoSelect={onVideoSelect}
      video={video}
    />
  ));

  return (
    <div
      style={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        flexFlow: "row wrap",
        alignItems: "center",
        margin: "0px",
        marginTop: "-2px",
        height: "638px",
        overflow: "scroll",
      }}
      className='ui relaxed divided list'>
      {renderedList}
    </div>
  );
};

export default VideoList;
