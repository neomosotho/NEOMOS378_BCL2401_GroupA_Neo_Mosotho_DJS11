/* eslint-disable no-unused-vars */
// import { useState } from 'react'
import React, {useState, useEffect} from 'react';
import logo from './assets/images/logo.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import All from './components/All';
import Audio from './components/Audio';
import Videos from './components/Videos';
import './App.css'
import styled from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes";


const Container = styled.div``;

function App() {
// hooks
const{darkMode, setDarkMode} = useState(true);
  return (
    <Router>
      
      <div className = "App">
        <NavBar />
        <header className="App-header">
          <img src={logo} className="logo" alt="logo" />
        </header>
        <main>

          <Routes>
          <Route exact path="/" element={All} />
            <Route path="/audio" element={Audio} />
            <Route path="/videos" element={Videos} />
          </Routes>

        </main>
      </div>

      <div className = "Podcasts">
        <h2>podcast 1</h2>
        <h2>podcast 1</h2>
        <h2>podcast 1</h2>
        <h2>podcast 1</h2>
        <h2>podcast 1</h2>
      </div>
      
    </Router>
  )
}


export default App
