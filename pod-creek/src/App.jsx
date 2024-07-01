/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import routing components from react-router-dom
import NavBar from "./components/NavBar"; // Import the NavBar component
import Dashboard from "./pages/Dashboard"; // Import the Dashboard page component
import Genre from "./components/Genres"; // Import the Genre component
import Shows from "./components/Shows"; // Import the Shows component
import Search from "./pages/Search"; // Import the Search page component
import Favorites from "./pages/Favorites"; // Import the Favorites page component
// import useFetchPodcasts from "./utils/useFetchPodcasts"; // Import a custom hook for fetching podcasts 
import "./App.css"; // Import CSS file for global styles
import styled, { ThemeProvider } from "styled-components"; // Import styled-components and ThemeProvider for theming
import { lightTheme, darkTheme } from "./utils/Themes"; // Import light and dark themes
import SideBar from "./components/SideBar"; // Import the SideBar component

// Define a styled-component for the main container of the app
const Container = styled.div`
  display: flex; // Use flexbox layout
  background: ${({ theme }) => theme.bgLight}; // Background color based on the current theme
  width: 100%; // Full width of the viewport
  height: 100vh; // Full height of the viewport
  overflow-x: hidden; // Hide horizontal overflow
`;

// Define a styled-component for the frame that contains the main content
const Frame = styled.div`
  display: flex; // Use flexbox layout
  flex-direction: column; // Arrange children in a column
  flex: 3; // Flex-grow property to make this component take up available space
`;

function App() {
  // Define state hooks
  const [darkMode, setDarkMode] = useState(false); // State for theme toggling
  const [menuOpen, setMenuOpen] = useState(false); // State for sidebar visibility
  const [sortCriteria, setSortCriteria] = useState(true); // State for sorting criteria

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}> {/* Apply the current theme to the app */}
      <BrowserRouter> {/* Enable routing in the app */}
        <Container> {/* Main container */}
          {menuOpen && ( /* Conditionally render the sidebar based on menuOpen state */
            <SideBar
              menuOpen={menuOpen} // Pass menuOpen state to SideBar
              setMenuOpen={setMenuOpen} // Pass setMenuOpen function to SideBar
              setDarkMode={setDarkMode} // Pass setDarkMode function to SideBar
              darkMode={darkMode} // Pass darkMode state to SideBar
            />
          )}

          <Frame> {/* Frame containing the main content */}
            {/* Navbar component with handlers for menu and sorting */}
            <NavBar
              menuOpen={menuOpen} // Pass menuOpen state to NavBar
              setMenuOpen={setMenuOpen} // Pass setMenuOpen function to NavBar
              handleSortChange={setSortCriteria} // Pass setSortCriteria function to NavBar
            />

            <div className="App"> {/* Main application div */}
              <main> {/* Main content area */}
                <Routes> {/* Define routes for the app */}
                  <Route exact path="/" element={<Dashboard />} /> {/* Route for Dashboard */}
                  <Route path="/genre/:id" element={<Genre />} /> {/* Route for Genre with dynamic ID */}
                  <Route path="/shows/:id" element={<Shows />} /> {/* Route for Shows with dynamic ID */}
                  <Route path="/search" element={<Search />} /> {/* Route for Search */}
                  <Route path="/favorites" element={<Favorites />} /> {/* Route for Favorites */}
                  <Route path="/shows/:id" element={<Shows />} /> {/* Duplicate Route for Shows with dynamic ID */}
                  <Route path="/" element={<Dashboard sortCriteria={sortCriteria} />} /> {/* Route for Dashboard with sorting criteria */}
                </Routes>
              </main>
            </div>
          </Frame>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App; // Export the App component as the default export

