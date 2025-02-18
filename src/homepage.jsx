import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaTasks } from 'react-icons/fa';

function HomePage() {
  return (
    <div className="app-container">
      {/* App Title */}
      <h1 className="app-title mb-10">TaskCompanion</h1>

      {/* Navigation Buttons */}
      <div className="flex flex-row justify-center space-x-6">
        <Link
          to="/timer"
          className="nav-button"
          aria-label="Go to Timer"
        >
          <FaClock className="nav-icon" />
          <span className="nav-label">Timer</span>
        </Link>
        <Link
          to="/tasklist"
          className="nav-button"
          aria-label="Go to Task List"
        >
          <FaTasks className="nav-icon" />
          <span className="nav-label">Todo List</span>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;