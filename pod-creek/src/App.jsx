/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
// import logo from './assets/images/logo.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import All from './components/All';
import Audio from './components/Audio';
import Videos from './components/Videos';
import './App.css'
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes";
import SideBar from './components/SideBar';


const Container = styled.div`
display: flex;
background: ${({ theme }) => theme.bg};
width: 100%;
height: 100vh;
overflow-x: hidden;
overfllow-y: hidden;
`;

function App() {
// hooks
const{darkMode, setDarkMode} = useState(true);

  return (
    <ThemeProvider theme = {darkMode ? darkTheme : lightTheme}>
      <Container>
    <Router>
    <SideBar />
    <NavBar />
      <div className = "App">
        <header className="App-header">
          {/* <img src={logo} className="logo" alt="logo" /> */}
        </header>
        <main>

          <Routes>
          <Route exact path="/" element={All} />
            <Route path="/audio" element={Audio} />
            <Route path="/videos" element={Videos} />
          </Routes>

        </main>
      </div>

      {/* <div className = "Podcasts">
        <h2>podcast 1</h2>
        <h2>podcast 1</h2>
        <h2>podcast 1</h2>
        <h2>podcast 1</h2>
        <h2>podcast 1</h2>
      </div> */}
      
    </Router>
    </Container>
    </ThemeProvider>
  )
}


export default App;
