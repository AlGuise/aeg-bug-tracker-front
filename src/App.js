import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './views/LandingPage';
import TeamPage from './views/TeamPage';
import ProjectsPage from './views/ProjectsPage';
import TicketsPage from './views/TicketsPage';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import Logout from './views/Logout';
import Protected from './components/Protected'

function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [errors, setErrors] = useState(false)
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json()
        .then((user) => {
        setUser(user)
        if(user){
          setIsAuthenticated(true)
        } else {
          setIsAuthenticated(false)
        }
      });
      }
    });
      }, []);

  return (
    <div className="App">
      <Header setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>
      <Routes>
        <Route path="/login" element = {<LandingPage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>} />
        <Route path="/team" element = {<Protected isAuthenticated={isAuthenticated}><TeamPage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/></Protected>}/>
        <Route path="/projects" element = {<Protected isAuthenticated={isAuthenticated}><ProjectsPage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/></Protected>} />
        <Route path="/tickets" element = {<Protected isAuthenticated={isAuthenticated}><TicketsPage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/></Protected>} />
        <Route path="/" element = {<Protected isAuthenticated={isAuthenticated}><Dashboard isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/></Protected>} />
        <Route path="/logout" element = {<Logout/>} />
        <Route path="/profile" element = {<Protected isAuthenticated={isAuthenticated}><Profile isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/></Protected>} />
      </Routes>
    </div>
  );
}

export default App;