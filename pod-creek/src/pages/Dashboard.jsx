/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import useFetchPodcasts from "../utils/useFetchPodcasts";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import NavBar from "../components/NavBar";
import SortButtons from "../components/SortButtons";
import { formatDistanceToNow } from 'date-fns';

// Styled-components for various elements
const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px;
  padding-right: 20px;
`;

const PodcastCard = styled.div`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: left;
  cursor: pointer;
`;

const PodcastImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const PodcastDetails = styled.div`
  padding: 16px;
`;

const PodcastTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const PodcastSeasons = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

const SeasonContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.text_secondary};
  margin-top: 16px;
`;

const SeasonTitle = styled.h4`
  font-size: 16px;
  margin: 12px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const EpisodeContainer = styled.div`
  padding-left: 16px;
`;

const EpisodeTitle = styled.p`
  font-size: 14px;
  margin: 8px 0;
  cursor: pointer;
`;

const Genre = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

// Mapping genre IDs to genre names
const genreMapping = {
  1: "Personal Growth",
  2: "Investigative Journalism",
  3: "History",
  4: "Comedy",
  5: "Entertainment",
  6: "Business",
  7: "Fiction",
  8: "News",
  9: "Kids and Family"
};

// Dashboard component to display list of podcasts
const Dashboard = () => {
  const { data, loading, error } = useFetchPodcasts("all");
  const [selectedShow, setSelectedShow] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [selectedSort, setSelectedSort] = useState("All"); // Default sort option

  useEffect(() => {
    // Fetch favorite podcasts from localStorage on component mount
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  // Function to handle sorting of podcasts
  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
    let sortedShows = [...data];
    switch (sortOption) {
      case "A-Z":
        sortedShows.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedShows.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "Newest":
        sortedShows.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "Oldest":
        sortedShows.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      default:
        // All or default case
        sortedShows = [...data];
        break;
    }
    setSortedData(sortedShows);
  };

  // Function to handle click on a podcast show
  const handleShowClick = (showId) => {
    setSelectedShow(showId);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      {/* Sort buttons component */}
      <SortButtons onSort={handleSortChange} /> 
      <DashboardContainer>
        {(selectedSort !== "All" ? sortedData : data).map((podcast) => (
          <PodcastCard key={podcast.id} onClick={() => handleShowClick(podcast)}>
            <NavLink to={`/shows/${podcast.id}`} style={{ textDecoration: "none" }}>
              {/* Podcast image */}
              <PodcastImage src={podcast.image} alt={podcast.title} />
              <PodcastDetails>
                {/* Podcast title */}
                <PodcastTitle>{podcast.title}</PodcastTitle>
                {/* Number of seasons */}
                <PodcastSeasons>{`${podcast.seasons.length} Seasons`}</PodcastSeasons>
                {/* Uncomment and use this if you want to show genre */}
                {/* <PodcastGenre>{genreMapping[podcast.genreId]}</PodcastGenre> */}
                <PodcastUpdated>{`Last updated ${formatDistanceToNow(new Date(podcast.updated))} ago`}</PodcastUpdated>
              </PodcastDetails>
            </NavLink>

            {selectedShow && selectedShow.id === podcast.id && (
              <SeasonContainer>
                {podcast.seasons.map((season) => (
                  <div key={season.number}>
                    {/* Season title */}
                    <SeasonTitle>{`Season ${season.season}`}</SeasonTitle>
                    {season.episodes.map((episode) => (
                      <EpisodeContainer key={episode.id}>
                        {/* Episode title */}
                        <EpisodeTitle>{episode.title}</EpisodeTitle>
                      </EpisodeContainer>
                    ))}
                  </div>
                ))}
              </SeasonContainer>
            )}
          </PodcastCard>
        ))}
      </DashboardContainer>
    </>
  );
};

export default Dashboard;



