/* eslint-disable no-unused-vars */
// src/components/Shows.js

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchPodcasts from "../utils/useFetchPodcasts";
import styled from "styled-components";

const ShowContainer = styled.div`
  padding: 20px;
`;

const SeasonButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text_primary};
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 16px;

  &:hover {
    background: ${({ theme }) => theme.bgLight};
  }
`;

const SeasonsDropdown = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  margin-bottom: 20px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text_primary};
`;

const SeasonContainer = styled.div`
  margin-bottom: 10px;
`;

const EpisodeContainer = styled.div`
  margin-left: 20px;
`;

const Shows = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetchPodcasts("show", id);
  const [showSeasons, setShowSeasons] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  const handleSeasonClick = (season) => {
    setSelectedSeason(season);
  };

  const toggleSeasonsDropdown = () => {
    setShowSeasons(!showSeasons);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ShowContainer>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <SeasonButton onClick={toggleSeasonsDropdown}>
        {showSeasons ? "Hide Seasons" : "Show Seasons"}
      </SeasonButton>
      <SeasonsDropdown show={showSeasons}>
        {data.seasons && data.seasons.length > 0 ? (
          data.seasons.map((season) => (
            <SeasonContainer key={season.number}>
              <SeasonButton onClick={() => handleSeasonClick(season)}>
                Season {season.season}
              </SeasonButton>
              {selectedSeason === season &&
                season.episodes.map((episode) => (
                  <EpisodeContainer key={episode.id}>
                    <p onClick={() => console.log(`Playing ${episode.title}`)}>
                      {episode.title}
                    </p>
                  </EpisodeContainer>
                ))}
            </SeasonContainer>
          ))
        ) : (
          <p>No seasons available</p>
        )}
      </SeasonsDropdown>
      {selectedEpisode && (
        <AudioPlayer controls>
          <source src={selectedEpisode.audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </AudioPlayer>
      )}
    </ShowContainer>
  );
};

export default Shows;


