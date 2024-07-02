/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchPodcasts from "../utils/useFetchPodcasts";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import { formatDistanceToNow } from 'date-fns';

const GenreContainer = styled.div`
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

const PodcastUpdated = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

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

const Genre = () => {
  const { genreId } = useParams();
  const { data, loading, error } = useFetchPodcasts(`genre/${genreId}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <GenreContainer>
      {data.map((podcast) => (
        <PodcastCard key={podcast.id}>
          <NavLink to={`/shows/${podcast.id}`} style={{ textDecoration: "none" }}>
            <PodcastImage src={podcast.image} alt={podcast.title} />
            <PodcastDetails>
              <PodcastTitle>{podcast.title}</PodcastTitle>
              <PodcastSeasons>{`${podcast.seasons.length} Seasons`}</PodcastSeasons>
              {/* <PodcastUpdated>{`Last updated ${formatDistanceToNow(new Date(podcast.updated))} ago`}</PodcastUpdated> */}
            </PodcastDetails>
          </NavLink>
        </PodcastCard>
      ))}
    </GenreContainer>
  );
};

export default Genre;

