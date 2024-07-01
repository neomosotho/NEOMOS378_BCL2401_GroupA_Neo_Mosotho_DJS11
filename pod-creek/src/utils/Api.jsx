const BASE_URL = "https://podcast-api.netlify.app"; // Base URL for the podcast API

// Function to fetch all podcasts
export const fetchAllPodcasts = async () => {
  try {
    const response = await fetch(BASE_URL); // Make a GET request to the base URL
    const data = await response.json(); // Parse the response as JSON
    return data; // Return the parsed data
  } catch (error) {
    throw new Error("Error fetching all podcasts: " + error.message); // Throw a new error with a custom message if the request fails
  }
};

// Function to fetch podcasts by genre ID
export const fetchGenre = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/genre/${id}`); // Make a GET request to the genre endpoint with the provided ID
    const data = await response.json(); // Parse the response as JSON
    return data; // Return the parsed data
  } catch (error) {
    throw new Error("Error fetching genre: " + error.message); // Throw a new error with a custom message if the request fails
  }
};

// Function to fetch a specific podcast show by ID
export const fetchShow = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/id/${id}`); // Make a GET request to the show endpoint with the provided ID
    const data = await response.json(); // Parse the response as JSON
    return data; // Return the parsed data
  } catch (error) {
    throw new Error("Error fetching show: " + error.message); // Throw a new error with a custom message if the request fails
  }
};

