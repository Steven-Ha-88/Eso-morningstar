import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  console.log(video, "HELO");
  // calling onVideoSelect function from App with an argument. without an argument the function will still be called but with no argument to invoke it with.
 return ( <div
    onClick={() => onVideoSelect(video)}
    style={{
      margin: "2px",
      cursor: "pointer",
      display: "flex",
      flexFlow: "row nowrap",
    }}>{console.log(video, "pic url")}
    <img
      alt={video.node.title}
      className='ui image'
      style={{ cursor: "pointer" }}
      src={video?.node?.thumbnail?.url}
    />
    {/* <div className='content'>
      <div className=''>{video.snippet.title}</div>
    </div> */}
  </div>)
};

export default VideoItem;
