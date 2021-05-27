import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleVideoPress = () => {
    //if video is playing, stop it
    //if stopped, play it
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        controls
        ref={videoRef}
        src="http://media.w3.org/2010/05/sintel/trailer.ogv"
      ></video>

      <VideoFooter />
      <VideoSidebar likes={111} shares={222} messages={333} />
    </div>
  );
}

export default Video;
