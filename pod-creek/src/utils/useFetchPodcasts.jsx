/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"; // Import React hooks for state and effect management
import { fetchAllPodcasts, fetchGenre, fetchShow } from "./Api"; // Import API functions for fetching podcasts

// Custom hook for fetching podcasts based on the provided type and optional ID
const useFetchPodcasts = (type, id = null) => {
  const [data, setData] = useState([]); // State for storing fetched data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    // Function to fetch data based on the type and ID
    const fetchData = async () => {
      try {
        let result;
        switch (type) {
          case "all":
            result = await fetchAllPodcasts(); // Fetch all podcasts
            break;
          case "genre":
            result = await fetchGenre(id); // Fetch podcasts by genre ID
            break;
          case "show":
            result = await fetchShow(id); // Fetch podcast by show ID
            break;
          default:
            throw new Error("Invalid type"); // Throw error for invalid type
        }
        setData(result); // Set the fetched data to state
      } catch (err) {
        setError(err); // Set the error to state
      } finally {
        setLoading(false); // Set loading to false after fetch attempt
      }
    };

    fetchData(); // Call the fetchData function

  }, [type, id]); // Re-run effect if type or id changes

  return { data, loading, error }; // Return the fetched data, loading status, and error
};

export default useFetchPodcasts; // Export the custom hook as default

    
    

