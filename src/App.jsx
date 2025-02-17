// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './homepage';
import TimerPage from './timerpage';
//import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/timer" element={<TimerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
