/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
// import logo from './assets/images/logo.png';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import All from "./components/All";
import Audio from "./components/Audio";
import Videos from "./components/Videos";
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
      {/* <Router> */}
        <Container>
          <SideBar setMenuOpen = {setMenuOpen} setDarkMode = {setDarkMode} darkMode = {darkMode} />

          <Frame>PodCreek</Frame>
          {/* <NavBar />
          

          <div className="App">
            <main>
              <Routes>
                <Route exact path="/" element={All} />
                <Route path="/audio" element={Audio} />
                <Route path="/videos" element={Videos} />
              </Routes>
            </main>
          </div> */}
        </Container>
      {/* </Router> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
