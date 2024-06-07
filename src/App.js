import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';
import ProjectList from './components/ProjectList';
import BandGenerator from './projects/bandgenerator/BandGenerator';
import WeatherApp from './projects/weatherapp/weatherApp';
import SimonGame from './projects/simongame/simongame';
// import Todolist from './components/todolist';
import Todolist from './projects/todolist/todolist'
import Contact from './components/Contact';
import Contacttest from './components/Contacttest';
import './App.css';
import BottomContainer from './components/BottomContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/bandgenerator" element={<BandGenerator />} />
          <Route path="/projects/weatherapp" element={<WeatherApp />} />
          <Route path="/projects/simongame" element={<SimonGame />} />
          <Route path="/projects/todolist" element={<Todolist />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contacttest" element={<Contacttest />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <BottomContainer />
      </div>
    </Router>
  );
}

export default App;
