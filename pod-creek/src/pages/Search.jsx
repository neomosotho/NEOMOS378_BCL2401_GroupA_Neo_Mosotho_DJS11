/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import useFetchPodcasts from "../utils/useFetchPodcasts";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 4px;
  margin-bottom: 20px;
`;

const SearchResults = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
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

const Search = () => {
  const { data, loading, error } = useFetchPodcasts("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value === "") {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((podcast) =>
          podcast.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search for shows..."
        value={searchQuery}
        onChange={handleSearchInput}
      />
      <SearchResults>
        {filteredData.map((podcast) => (
          <PodcastCard key={podcast.id}>
            <NavLink to={`/shows/${podcast.id}`} style={{ textDecoration: "none" }}>
              <PodcastImage src={podcast.image} alt={podcast.title} />
              <PodcastDetails>
                <PodcastTitle>{podcast.title}</PodcastTitle>
                <PodcastSeasons>{podcast.seasons.length} Seasons</PodcastSeasons>
              </PodcastDetails>
            </NavLink>
          </PodcastCard>
        ))}
      </SearchResults>
    </SearchContainer>
  );
};

export default Search;
