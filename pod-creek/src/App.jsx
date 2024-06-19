/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import NavBar from "./components/NavBar";
import All from "./components/All";
import Genre from "./components/Genre";
import Shows from "./components/Shows";
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
  const [ darkMode, setDarkMode ] = useState(false);

  const [ menuOpen, setMenuOpen ] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>
          <SideBar 
          menuOpen = {menuOpen}
          setMenuOpen = {setMenuOpen}
          setDarkMode = {setDarkMode} 
          darkMode = {darkMode} 
          />

          <Frame>
           {/* <NavBar /> */}
          

          <div className="App">
            <main>
              <Routes>
                <Route exact path="/" element={<All/>} />
                <Route path="/genre/:id" element={<Genre/>} />
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
