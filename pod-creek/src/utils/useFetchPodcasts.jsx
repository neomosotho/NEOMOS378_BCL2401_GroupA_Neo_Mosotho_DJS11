/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { fetchAllPodcasts, fetchGenre, fetchShow } from "./Api";


const useFetchPodcasts = (type, id = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result;
        switch (type) {
          case "all":
            result = await fetchAllPodcasts();
            break;
          case "genre":
            result = await fetchGenre(id);
            break;
          case "show":
            result = await fetchShow(id);
            break;
          default:
            throw new Error("Invalid type");
        }
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type, id]);

  return { data, loading, error };
};

export default useFetchPodcasts;
    
    

