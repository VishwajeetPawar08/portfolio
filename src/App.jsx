// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import ConnectMe from './components/ConnectMe';
import Footer from './components/Footer';

import './styles/App.css'; // Main application styles

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certificates />
        <ConnectMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;