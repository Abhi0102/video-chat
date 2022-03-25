import React from "react";
import { useState } from "react";
import Webcam from "react-webcam";

function Video(props) {
  const [audio, setAudio] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const videoClickHandle = (e) => {
    e.preventDefault();
    setShowVideo(!showVideo);
  };

  const audioClickHandle = (e) => {
    e.preventDefault();
    setAudio(!audio);
  };
  return (
    <>
      <div className="btn-audio-video-grp">
        <button
          onClick={videoClickHandle}
          className={`btn-audio-video txt-white btn-${
            showVideo ? "danger" : "success"
          }`}
        >
          {showVideo ? (
            <i className="fa-solid fa-video-slash"></i>
          ) : (
            <i className="fa-solid fa-video"></i>
          )}
        </button>
        <button
          onClick={audioClickHandle}
          className={`btn-audio-video txt-white btn-${
            audio ? "danger" : "success"
          }`}
        >
          {audio ? (
            <i className="fa-solid fa-microphone-slash"></i>
          ) : (
            <i className="fa-solid fa-microphone"></i>
          )}
        </button>
      </div>
      {showVideo && (
        <div>
          <Webcam audio={audio} mirrored={true} />
        </div>
      )}
    </>
  );
}

export default Video;
