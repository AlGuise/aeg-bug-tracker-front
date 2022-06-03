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
import AdminSetup from './views/AdminSetUp';
import Protected from './components/Protected'

export default function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState(false)
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
      <Header  setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} />
      <Routes>
        <Route
          path="/login"
          element = {
            <LandingPage
              setIsAuthenticated={setIsAuthenticated}
              isAuthenticated={isAuthenticated}
              setUser={setUser}
              user={user}
            />
        }/>
        <Route
          path="/team"
          element = {
            <Protected isAuthenticated={isAuthenticated}>
              <TeamPage
                setUser={setUser}
                user={user}/>
            </Protected>
        }/>
        <Route
          path="/projects"
          element = {
            <Protected isAuthenticated={isAuthenticated}>
              <ProjectsPage
                setUser={setUser}
                user={user}/>
            </Protected>
        }/>
        <Route
          path="/tickets"
          element = {
            <Protected isAuthenticated={isAuthenticated}>
              <TicketsPage
                setUser={setUser}
                user={user}/>
            </Protected>
        }/>
        <Route
          path="/"
          element = {
            <Protected isAuthenticated={isAuthenticated}>
              <Dashboard
                setUser={setUser}
                user={user}/>
            </Protected>
        }/>
        <Route
          path="/adminsetup"
          element = {
            <Protected  isAuthenticated={isAuthenticated}>
              <AdminSetup
                setErrors={setErrors}
                setUser={setUser}
                user={user}/>
            </Protected>
        }/>
        <Route
          path="/profile"
          element = {
            <Protected isAuthenticated={isAuthenticated}>
              <Profile
                setUser={setUser}
                user={user}/>
              </Protected>
        }/>
      </Routes>
    </div>
  );
}