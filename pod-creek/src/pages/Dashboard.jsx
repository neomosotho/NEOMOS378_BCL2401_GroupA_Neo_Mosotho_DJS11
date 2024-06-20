/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useFetchPodcasts from "../utils/useFetchPodcasts";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
`;

const PodcastCard = styled.div`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 200px;
  text-align: center;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const PodcastImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const PodcastTitle = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

const PodcastSeasons = styled.p`
  font-size: 14px;
  margin: 10px 0;
`;

const ShowContainer = styled.div`
  padding: 20px;
`;

const SeasonContainer = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
`;

const EpisodeContainer = styled.div`
  margin-left: 20px;
  cursor: pointer;
`;

const Dashboard = () => {
  const { data, loading, error } = useFetchPodcasts("all");
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);

  const handleShowClick = (showId) => {
    setSelectedShow(showId);
    setSelectedSeason(null);
  };

  const handleSeasonClick = (season) => {
    setSelectedSeason(season);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (selectedShow) {
    return (
      <ShowContainer>
        
        <h1>{selectedShow.title}</h1>
        {selectedShow.seasons.map((season) => (
          
          <SeasonContainer key={season.number} onClick={() => handleSeasonClick(season)}>
            <h3>Season {season.season}</h3>
            {selectedSeason === season &&
              season.episodes.map((episode) => (

                <EpisodeContainer key={episode.id} onClick={() => console.log(`Playing ${episode.title}`)}>
                  <p>{episode.title}</p>
                </EpisodeContainer>
                
              ))}
          </SeasonContainer>
          
        ))}
      </ShowContainer>
    );
  }

  return (
    <DashboardContainer>
      {data
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((podcast) => (
          <>
          <NavLink key={podcast.id} to={`/shows/${podcast.id}`} style = {{ textDecoration: "none" }}>
          <PodcastCard key={podcast.id}>
            <PodcastImage src={podcast.image} alt={podcast.title} />
            <PodcastTitle>{podcast.title}</PodcastTitle>
            <PodcastSeasons>{podcast.seasons.length} Seasons</PodcastSeasons>
          </PodcastCard>
          </NavLink> 
          </>
          
        ))}
    </DashboardContainer>
  );
};

export default Dashboard;
