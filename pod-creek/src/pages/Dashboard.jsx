/* eslint-disable no-unused-vars */
import React from "react";
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

const PodcastDescription = styled.p`
  font-size: 14px;
  padding: 0 10px 10px;
`;

const Dashboard = () => {
  const { data, loading, error } = useFetchPodcasts("all");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <DashboardContainer>
      {data.map((podcast) => (
        <NavLink key={podcast.id} to={`/shows/${podcast.id}`}>
          <PodcastCard>
            <PodcastImage src={podcast.image} alt={podcast.title} />
            <PodcastTitle>{podcast.title}</PodcastTitle>
            <PodcastDescription>{podcast.description}</PodcastDescription>
          </PodcastCard>
        </NavLink>
      ))}
    </DashboardContainer>
  );
};

export default Dashboard;