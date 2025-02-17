// src/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock } from 'react-icons/fa';

function HomePage() {
  return (
    <div className="app-container">
      <h1 className="neon-text mb-5">TaskCompanion</h1>
      <Link to="/timer" className="clock-icon-button" aria-label="Go to Timer">
        <FaClock className="clock-icon" />
        <span className="clock-icon-label">Pomodoro Timer</span>
      </Link>
    </div>
  );
}

export default HomePage;
