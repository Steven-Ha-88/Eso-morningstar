import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link, graphql, useStaticQuery } from "gatsby";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export const Videos = (props) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelected] = useState({});
  const [loading, setLoading] = useState(true);

  const data = useStaticQuery(graphql`
    query {
      allYoutubeVideo {
        edges {
          node {
            title
            description
            thumbnail {
              url
            }
            id
            videoId
          }
        }
      }
    }
  `);

  useEffect(() => {
    setVideos(data.allYoutubeVideo.edges.slice(1));
    setSelected(data.allYoutubeVideo.edges[0]);
    setLoading(false);
  }, []);
  console.log(data, "this!");

  const onVideoSelect = (video) => {
    setSelected(video);
  };

  return (
    <div style={{ height: "auto", overflow: "hidden" }}>
      {loading ? (
        <div className="loading-container">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="ui container">
          <div className="ui stackable grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={selectedVideo} />
              </div>
              <div
                className="five wide column"
                style={{ display: "flex", flexFlow: "column" }}
              >
                {/* <a
                  href='https://www.youtube.com/channel/UC5JtyGZB8Ah4DHKX3Cth_Jw'
                  className='latest-button'
                  style={{ alignSelf: "center", textAlign: "center" }}>
                  Videos{" "}
                </a> */}
                <h1 className="title">Videos</h1>
                <VideoList onVideoSelect={onVideoSelect} videos={videos} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
