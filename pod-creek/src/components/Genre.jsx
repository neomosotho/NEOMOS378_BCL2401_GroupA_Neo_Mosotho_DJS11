/* eslint-disable no-unused-vars */
import React from "react";

import useFetchPodcasts from "../utils/useFetchPodcasts";
import { useParams } from "react-router-dom";

const Genre = () => {
  const { id } = useParams();
  const { data: genre, loading, error } = useFetchPodcasts(`https://podcast-api.netlify.app/genre/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>{genre.name}</h2>
      <ul>
        {genre.podcasts.map((podcast) => (
          <li key={podcast.id}>
            <h3>{podcast.title}</h3>
            <p>{podcast.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genre;