/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import styled from "styled-components";

const Player = styled.audio`
  width: 100%;
  margin-top: 20px;
`;

const AudioPlayer = ({ src }) => {
  return (
    <Player controls>
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </Player>
  );
};

export default AudioPlayer;
