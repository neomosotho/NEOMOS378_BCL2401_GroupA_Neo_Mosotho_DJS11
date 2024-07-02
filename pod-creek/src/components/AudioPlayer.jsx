/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { forwardRef, useImperativeHandle, useRef, useEffect, useState } from "react";
import styled from "styled-components";

const Player = styled.audio`
  width: 100%;
  margin-top: 20px;
`;

// const image = styled.img`
// height: 10px;
// width: 20px;
// `;

function AudioPlayer ( { play }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
  },[play]);

  if (!play) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <audio controls src={play.file} />
      </div>
    </div>
  )

  // const audioRef = useRef(null);

  // useImperativeHandle(ref, () => ({
  //   play: () => {
  //     audioRef.current.play();
  //   },
  //   pause: () => {
  //     audioRef.current.pause();
  //   },
  //   currentTime: () => {
  //     return audioRef.current.currentTime;
  //   }
  // }), []);

  // useEffect(() => {
  //   if (audioRef.current) {
  //     audioRef.current.load();
  //   }
  // }, [src]);

  // return (
  //   <Player ref={audioRef} controls>
  //     <source src={src} type="audio/mpeg" />
  //     Your browser does not support the audio element.
  //   </Player>
  // );
}

export default AudioPlayer;


