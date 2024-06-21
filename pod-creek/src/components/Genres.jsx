/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import useFetchPodcasts from "../utils/useFetchPodcasts";

const Genre = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetchPodcasts("genre", id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      {data.shows.map((show) => (
        <div key={show.id}>
          <h3>{show.title}</h3>
          <p>{show.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Genre;
