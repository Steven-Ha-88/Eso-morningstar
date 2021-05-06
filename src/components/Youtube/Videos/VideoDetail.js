import React from "react";
import "./styles.css";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.node.videoId}`;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexFlow: "column nowrap",
      }}
    >
      {/* <button className='latest-button'>Latest</button> */}
      <h1 className="title">Lent 101 Series</h1>
      <div className="ui embed">
        <iframe
          allowFullScreen="allowFullScreen"
          title="video player"
          src={videoSrc}
        />
      </div>
      <div
        style={{ height: "200px", overflow: "overlay" }}
        className="ui segment"
      >
        <h4>{video.node.title}</h4>
        <p>{video.node.description}</p>
        <a href="https://www.youtube.com/channel/UC5JtyGZB8Ah4DHKX3Cth_Jw">
          Click here to view all of our videos!
        </a>
      </div>
    </div>
  );
};

export default VideoDetail;
