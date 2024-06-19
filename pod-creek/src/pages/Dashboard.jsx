/* eslint-disable no-unused-vars */
import React from "react";
import useFetchPodcasts from "../utils/useFetchPodcasts";

const Dashboard = () => {
  const { data, loading, error } = useFetchPodcasts("all");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.map((podcast) => (
        <div key={podcast.id}>
          <img src={podcast.image} alt={podcast.title} style={{ width: "100px", height: "100px" }} />
          <h3>{podcast.title}</h3>
          <p>{podcast.description}</p>
          
        </div>
      ))}
    </div>
  );
};

export default Dashboard;