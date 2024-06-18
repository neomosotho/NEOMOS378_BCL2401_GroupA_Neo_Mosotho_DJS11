

const BASE_URL = "https://podcast-api.netlify.app";

export const fetchAllPodcasts = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching all podcasts: " + error.message);
  }
};

export const fetchGenre = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/genre/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching genre: " + error.message);
  }
};

export const fetchShow = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/id/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching show: " + error.message);
  }
};
