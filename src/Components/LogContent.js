import React from "react";
import "./LogContent.css";
import video from "../image/video.mp4";

function LogContent() {
  return (
    <div className="Content">
      <video className="video" src={video} autoPlay loop muted />
    </div>
  );
}
export default LogContent;
