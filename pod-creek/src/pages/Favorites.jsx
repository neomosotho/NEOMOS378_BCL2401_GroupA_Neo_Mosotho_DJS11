/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AudioPlayer from "../components/AudioPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar, faStar as regularStar } from "@fortawesome/free-solid-svg-icons";

const FavoritesContainer = styled.div`
  padding: 50px;
  padding-right: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const EpisodeCard = styled.div`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: left;
  cursor: pointer;
`;

const EpisodeDetails = styled.div`
  padding: 16px;
`;

const EpisodeTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const EpisodeDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 16px;
`;

const PlayButton = styled.button`
  background: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.text_primary};
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 14px;

  &:hover {
    background: ${({ theme }) => theme.bgLight};
  }
`;

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  const handlePlayClick = (episode) => {
    setSelectedEpisode(episode);
  };

  return (
    
    <FavoritesContainer>
      
      {favorites.length === 0 ? (
        <p>No favorite episodes found.</p>
      ) : (
        favorites.map((favorite) => (
          <EpisodeCard key={favorite.episode.id}>
            {/* <PodcastImage src={favorite.episode.image} alt={favorite.episode.title} /> */}
            <EpisodeDetails>
              <EpisodeTitle>{favorite.episode.title}</EpisodeTitle>
              <EpisodeDescription>{favorite.episode.description}</EpisodeDescription>
              <PlayButton onClick={() => handlePlayClick(favorite.episode)}>
                Play
              </PlayButton>
            </EpisodeDetails>
          </EpisodeCard>
        ))
      )}
      {selectedEpisode && <AudioPlayer src={selectedEpisode.audio} />}
    </FavoritesContainer>
  );
};

export default Favorites;


