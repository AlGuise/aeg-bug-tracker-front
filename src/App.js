import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './views/LandingPage';
import TeamPage from './views/TeamPage';
import ProjectsPage from './views/ProjectsPage';
import TicketsPage from './views/TicketsPage';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile'
import Logout from './views/Logout'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element = {<LandingPage/>} />
        <Route path="/team" element = {<TeamPage/>} />
        <Route path="/projects" element = {<ProjectsPage/>} />
        <Route path="/tickets" element = {<TicketsPage/>} />
        <Route path="/dashboard" element = {<Dashboard/>} />
        <Route path="/logout" element = {<Logout/>} />
        <Route path="/profile" element = {<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;