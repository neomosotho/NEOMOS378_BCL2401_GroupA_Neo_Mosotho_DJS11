/* eslint-disable no-unused-vars */
// src/components/Shows.js

import React from "react";
import { useParams } from "react-router-dom";
import useFetchPodcasts from "../utils/useFetchPodcasts";

const Shows = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetchPodcasts("show", id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      {data.seasons.map((season) => (
        <div key={season.id}>
          <h3>Season {season.number}</h3>
          {season.episodes.map((episode) => (
            <div key={episode.id}>
              <h4>{episode.title}</h4>
              <p>{episode.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Shows;
