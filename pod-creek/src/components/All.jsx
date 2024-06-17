/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';

const All = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        fetchShows()
        .then(data => setShows(data));
    }, []);

    return (
        <div>
            <h2>Welcome!</h2>
            <p>Available Shows</p>
            {shows.length > 0 ? (
                <ul>
                    {shows.map(show => (
                        <li key={show.id}>{show.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading shows...</p>
            )}
        </div>
    );
};

export default All;