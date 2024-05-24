import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Import Header from separate file
import Home from './components/Home';
import Resume from './components/Resume';
import ProjectList from './components/ProjectList'; // Import ProjectList component
import BandGenerator from './components/BandGenerator'; // Import the BandGenerator component
import Contact from './components/Contact';
import Contacttest from './components/Contacttest';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header /> {/* Render the Header component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/projects/bandgenerator" element={<BandGenerator />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contacttest" element={<Contacttest />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer /> {/* Render the Footer component */}
    </Router>
  );
}

export default App;
