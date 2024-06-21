/* eslint-disable no-unused-vars */
// src/components/Shows.jsx

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchPodcasts from "../utils/useFetchPodcasts";
import styled from "styled-components";
import AudioPlayer from "./AudioPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar, faStar as regularStar } from "@fortawesome/free-solid-svg-icons";

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

const EpisodeCard = styled.div`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 600px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 50px;
  margin-top: 50px;
`;

const EpisodeTitle = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;


const PlayButton = styled.button`
  background: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.text_primary};
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
  font-size: 14px;

  &:hover {
    background: ${({ theme }) => theme.bgLight};
  }
`;

const img = styled.img`
width: 10px;
height: 20px;

`;

const FavoritesButton = styled.button`
  background: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.text_primary};
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
  font-size: 14px;

  &:hover {
    background: ${({ theme }) => theme.bgLight};
  }
`;

const Shows = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetchPodcasts("show", id);
  const [showSeasons, setShowSeasons] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  const handleFavoriteClick = (episode, show, season) => {
    const newFavorite = {
        episode,
        show,
        season,
        addedAt: new Date().toISOString()
    };

    const storedFavorites = localStorage.getItem('favorites');
    const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
    favorites.push(newFavorite);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const handleSeasonClick = (season) => {
    setSelectedSeason(season);
    setSelectedEpisode(null); // Reset selected episode when season changes
  };

  const handleEpisodeClick = (episode) => {
    setSelectedEpisode(episode);
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
              <img src={season.image} alt={season.title} />
              <SeasonButton onClick={() => handleSeasonClick(season)}>
                Season {season.season}
              </SeasonButton>
              {selectedSeason === season &&
                season.episodes.map((episode) => (

                  <EpisodeCard key={episode.id}>
                    <p>{episode.title}</p>
                    <PlayButton onClick={() => handleEpisodeClick(episode)}>
                      Play
                    </PlayButton>
                    <FavoritesButton onClick={() => handleFavoriteClick(episode)}>
                      <FontAwesomeIcon icon={favorites.some(fav => fav.id === episode.id) ? solidStar : regularStar} />
                    </FavoritesButton>
                  </EpisodeCard>
                ))}
            </SeasonContainer>
          ))
        ) : (
          <p>No seasons available</p>
        )}
      </SeasonsDropdown>
      {selectedEpisode && <AudioPlayer src={selectedEpisode.audio} />}
    </ShowContainer>
  );
};

export default Shows;




