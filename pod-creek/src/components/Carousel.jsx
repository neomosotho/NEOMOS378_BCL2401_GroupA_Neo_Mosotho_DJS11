/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import useFetchPodcasts from "../utils/useFetchPodcasts";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/NavBar";
import SortButtons from "../components/SortButtons";
import Modal from "react-modal";

// Styled-components for various elements
const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px;
  padding-right: 20px;
`;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const CarouselWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

const CarouselContent = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: ${({ theme }) => theme.text_primary};

  &:disabled {
    color: ${({ theme }) => theme.text_secondary};
    cursor: not-allowed;
  }
`;

const PodcastCard = styled.div`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: left;
  margin: 0 10px;
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
  padding: 16px;
`;

const SeasonDropdown = styled.select`
  margin-bottom: 10px;
  padding: 8px;
  font-size: 14px;
`;

const ModalContent = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  max-width: 500px;
  margin: 20px auto;
`;

const ModalHeader = styled.h2`
  margin-bottom: 20px;
`;

const ModalCloseButton = styled.button`
  background: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.text_primary};
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;

  &:hover {
    background: ${({ theme }) => theme.bgLight};
  }
`;

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 4, data.length - 4));
  };

  return (
    <CarouselContainer>
      <ArrowButton onClick={handlePrevClick} disabled={currentIndex === 0}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </ArrowButton>
      <CarouselWrapper>
        <CarouselContent style={{ transform: `translateX(-${currentIndex * 320}px)` }}>
          {data.slice(currentIndex, currentIndex + 4).map((podcast) => (
            <PodcastCard key={podcast.id}>
              <NavLink to={`/shows/${podcast.id}`} style={{ textDecoration: "none" }}>
                <PodcastImage src={podcast.image} alt={podcast.title} />
                <PodcastDetails>
                  <PodcastTitle>{podcast.title}</PodcastTitle>
                  <PodcastSeasons>{`${podcast.seasons.length} Seasons`}</PodcastSeasons>
                </PodcastDetails>
              </NavLink>
            </PodcastCard>
          ))}
        </CarouselContent>
      </CarouselWrapper>
      <ArrowButton onClick={handleNextClick} disabled={currentIndex >= data.length - 4}>
        <FontAwesomeIcon icon={faChevronRight} />
      </ArrowButton>
    </CarouselContainer>
  );
};

const Dashboard = () => {
  const { data, loading, error } = useFetchPodcasts("all");
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [selectedSort, setSelectedSort] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEpisodes, setSelectedEpisodes] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  useEffect(() => {
    if (data) {
      setSortedData([...data]);
    }
  }, [data]);

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
        sortedShows = [...data];
        break;
    }
    setSortedData(sortedShows);
  };

  const handleShowClick = (showId) => {
    setSelectedShow(showId);
  };

  const handleSeasonChange = (podcastId, seasonValue) => {
    const selectedPodcast = data.find((podcast) => podcast.id === podcastId);
    const selectedSeasonEpisodes = selectedPodcast.seasons.find(
      (season) => season.season === parseInt(seasonValue)
    ).episodes;
    setSelectedEpisodes(selectedSeasonEpisodes);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <SortButtons onSort={handleSortChange} />
      <Carousel data={sortedData} />
      <DashboardContainer>
        {(selectedSort !== "All" ? sortedData : data).map((podcast) => (
          <PodcastCard key={podcast.id} onClick={() => handleShowClick(podcast.id)}>
            <NavLink to={`/shows/${podcast.id}`} style={{ textDecoration: "none" }}>
              <PodcastImage src={podcast.image} alt={podcast.title} />
              <PodcastDetails>
                <PodcastTitle>{podcast.title}</PodcastTitle>
                <PodcastSeasons>{`${podcast.seasons.length} Seasons`}</PodcastSeasons>
              </PodcastDetails>
            </NavLink>

            <FontAwesomeIcon
              icon={favorites.includes(podcast.id) ? solidStar : regularStar}
              onClick={() => toggleFavorite(podcast.id)}
              style={{ cursor: "pointer", float: "right", margin: "10px" }}
            />

            {selectedShow === podcast.id && (
              <SeasonContainer>
                <SeasonDropdown
                  value={selectedSeason[podcast.id] || ""}
                  onChange={(e) => handleSeasonChange(podcast.id, e.target.value)}
                >
                  <option value="">Select a season</option>
                  {podcast.seasons.map((season) => (
                    <option key={season.season} value={season.season}>
                      Season {season.season}
                    </option>
                  ))}
                </SeasonDropdown>
              </SeasonContainer>
            )}
          </PodcastCard>
        ))}
      </DashboardContainer>
</>

export default Carousel;
