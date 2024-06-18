/* eslint-disable no-unused-vars */
import React from 'react';
import useFetchPodcasts from "../utils/useFetchPodcasts";

const All = () => {
  const { data: podcasts, loading, error } = useFetchPodcasts("https://podcast-api.netlify.app");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>All Podcasts</h2>
      <ul>
        {podcasts.map((podcast) => (
          <li key={podcast.id}>
            <h3>{podcast.title}</h3>
            <p>{podcast.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default All;