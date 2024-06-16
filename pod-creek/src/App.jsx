/* eslint-disable no-unused-vars */
// import { useState } from 'react'
import React from 'react';
import logo from './assets/images/logo.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import All from './components/All';
import Audio from './components/Audio';
import Videos from './components/Videos';
import './App.css'

function App() {

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
      <h1>Pod Creek</h1>
      
    </Router>
  )
}

export default App
