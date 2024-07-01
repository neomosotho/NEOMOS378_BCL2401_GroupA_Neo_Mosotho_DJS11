/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AudioPlayer from "../components/AudioPlayer";
import useFetchPodcasts from "../utils/useFetchPodcasts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar, faStar as regularStar, faV } from "@fortawesome/free-solid-svg-icons";
import SortButtons from "../components/SortButtons";

// Styled-components for styling the Favorites container and episode cards
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

// Main Favorites component
const Favorites = () => {
  // State to hold the list of favorite episodes
  const [favorites, setFavorites] = useState([]);

  // useEffect to fetch favorites from localStorage on component mount
  useEffect(() => {
    // Retrieve the list of favorite episodes from localStorage
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    // Update the favorites state with the retrieved data
    setFavorites(favs);
    setSortedData(favs)
  }, []);

  // Handler to set the selected episode for playback
  const handlePlayClick = (episode) => {
    // Update the selectedEpisode state with the clicked episode
    setSelectedEpisode(episode);
  };

  const [selectedSort, setSelectedSort] = useState("All");
  const [sortedData, setSortedData] = useState([]);
  const { data, loading, error } = useFetchPodcasts("all");
  // State to hold the currently selected episode for playback
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [sortedEpisodes, setSortedepisodes] = useState("All");

    // Function to handle sorting of podcasts
    const handleSortChange = (sortOption) => {
      setSelectedSort(sortOption);
      let sortedEpisodes = [...favorites];
      switch (sortOption) {
        case "A-Z":
          sortedEpisodes.sort((a, b) => a.episode.title.localeCompare(b.episode.title));
          break;
        case "Z-A":
          sortedEpisodes.sort((a, b) => b.episode.title.localeCompare(a.episode.title));
          break;
        case "Newest":
          sortedEpisodes.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;
        case "Oldest":
          sortedEpisodes.sort((a, b) => new Date(a.date) - new Date(b.date));
          break;
        default:
          // All or default case
          sortedEpisodes = [...favorites];
          break;
      }
      setSortedData(sortedEpisodes);
    };

    // console.log(data)
    console.log(selectedEpisode)
    console.log(favorites)
    console.log(sortedData)

  return (
    <>
    <SortButtons onSort={handleSortChange} /> 
    <FavoritesContainer>
      {sortedData.length === 0 ? (
        // Display a message if no favorite episodes are found
        <p>No favorite episodes found.</p>
      ) : (
        // Map through the list of favorite episodes and render each one
        sortedData.map((favorite) => (
          <EpisodeCard key={favorite.episode.id}>
            {/* <PodcastImage src={favorite.episode.image} alt={favorite.episode.title} /> */}
            <EpisodeDetails>
              {/* Display the episode title */}
              <EpisodeTitle>{favorite.episode.title}</EpisodeTitle>
              {/* Display the episode description */}
              <EpisodeDescription>{favorite.episode.description}</EpisodeDescription>
              {/* Button to play the selected episode */}
              <PlayButton onClick={() => handlePlayClick(favorite.episode)}>
                Play
              </PlayButton>
            </EpisodeDetails>
          </EpisodeCard>
        ))
      )}
      {/* Render the AudioPlayer component if an episode is selected for playback */}
      {selectedEpisode && <AudioPlayer src={selectedEpisode.audio} />}
    </FavoritesContainer>
    </>
  );
};

export default Favorites;



