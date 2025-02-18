// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './homepage';
import TimerPage from './timerpage';
import TaskPage from './tasklistpage';
//import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/timer" element={<TimerPage />} />
        <Route path="/tasklist" element={<TaskPage />} />
      </Routes>
    </Router>
  );
}

export default App;
