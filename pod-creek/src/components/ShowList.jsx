/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';

function ShowList() {
    const [shows, setShows] = useState([]);
  
    useEffect(() => {
      fetch('path/to/your/data.json')
        .then(response => response.json())
        .then(data => setShows(data.shows));
    }, []);
  
    return (
      <div>
        <h2>Available Shows</h2>
        <ul>
          {shows.map(show => (
            <li key={show.id}>{show.name}</li>
          ))}
        </ul>
      </div>
    );
  }

  export default ShowList;