import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import LandingPage from './views/LandingPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<LandingPage/>} />
      </Routes>
    </div>
  );
}

export default App;
