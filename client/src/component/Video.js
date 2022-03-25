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
      <button onClick={videoClickHandle}>{`Turn ${
        showVideo ? `off` : `on`
      } Video`}</button>
      <button onClick={audioClickHandle}>{`Turn ${
        audio ? `off` : `on`
      } Audio`}</button>
      {showVideo && (
        <div>
          <Webcam audio={audio} mirrored={true} />
        </div>
      )}
    </>
  );
}

export default Video;
