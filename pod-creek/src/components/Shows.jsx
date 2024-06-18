/* eslint-disable no-unused-vars */
import React from "react";

import useFetchPodcasts from "../utils/useFetchPodcasts";
import { useParams } from "react-router-dom";

const Show = () => {
  const { id } = useParams();
  const { data: show, loading, error } = useFetchPodcasts(`https://podcast-api.netlify.app/id/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>{show.title}</h2>
      {show.seasons.map((season) => (
        <div key={season.id}>
          <h3>{season.title}</h3>
          <ul>
            {season.episodes.map((episode) => (
              <li key={episode.id}>
                <h4>{episode.title}</h4>
                <p>{episode.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Show;