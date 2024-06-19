/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Genre from "./components/Genre";
import Shows from "./components/Shows";
import Search from "./pages/Search";
import Favourites from "./pages/Favourites";
// import useFetchPodcasts from "./utils/useFetchPodcasts";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes";
import SideBar from "./components/SideBar";

const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.bgLight};
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overfllow-y: hidden;
`;

const Frame = styled.div`
display: flex;
flex-direction: column;
flex: 3;
`;

function App() {
  // hooks
  const [ darkMode, setDarkMode ] = useState(true);

  const [ menuOpen, setMenuOpen ] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>
          {menuOpen &&
          <SideBar 
          menuOpen = {menuOpen}
          setMenuOpen = {setMenuOpen}
          setDarkMode = {setDarkMode} 
          darkMode = {darkMode} 
          />
        }

          <Frame>
          <NavBar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
          

          <div className="App">
            <main>
              <Routes>
                <Route exact path="/" element={<Dashboard/>} />
                <Route path="/genre/:id" element={<Genre/>} />
                <Route path="/shows/:id" element={<Shows/>} />
                <Route path="/search" element={<Search/>} />
                <Route path="/favourites" element={<Favourites/>} />
                <Route path="/shows/:id" element={<Shows/>} />
              </Routes>
            </main>
          </div> 
          </Frame>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
