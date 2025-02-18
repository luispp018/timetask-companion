import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { FaHome } from "react-icons/fa";


function TimerPage() {
  const [mode, setMode] = useState("work");
  const [timeLeft, setTimeLeft] = useState(5 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            const newMode = mode === "work" ? "break" : "work";
            setMode(newMode);
            setShowNotification(true);

            setTimeout(() => {
              const notificationElement = document.querySelector(".notification");
              if (notificationElement) {
                notificationElement.classList.add("opacity-0");
              }
            }, 2500);

            setTimeout(() => {
              setShowNotification(false);
            }, 3000);

            return newMode === "work" ? 5 * 60 : 1 * 60;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, mode]);

  return (
    <div className="flex flex-col h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Header */}
      <header className="w-full p-4 flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-8">
          <Link to="/" aria-label="Go to Home">
            <button className="text-[#c9d1d9] hover:text-white transition duration-300 ease-in-out">
              <FaHome size={24} />
            </button>
          </Link>
        </div>
      </header>

      {/* Notification */}
      {showNotification && (
        <div className="notification fixed top-5 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 text-gray-800 px-5 py-2 rounded-lg shadow-lg font-bold transition-opacity duration-500 ease-in-out opacity-0 animate-fadeIn z-50">
          {mode === "work" ? "Time to get back to work!" : "Time for a break!"}
        </div>
      )}

      {/* Timer Box */}
      <div className="flex-grow flex justify-center items-center p-10">
        <div className={`p-10 rounded-2xl shadow-lg backdrop-blur-sm ${mode === "work" ? "bg-work-red" : "bg-break-teal"}`}>
          <h1 className="text-4xl font-bold mb-5 text-center">{mode === "work" ? "Work" : "Break"}</h1>
          <div className="text-6xl font-bold mb-8 text-center">
            {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
          </div>
          <div className="flex justify-center gap-5">
          <div className="flex justify-center gap-5">
            <button
              className="bg-white bg-opacity-80 text-gray-800 px-6 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-opacity-100 w-[100px] text-center"
              onClick={() => setIsRunning(!isRunning)}
            >
              {isRunning ? "Pause" : "Start"}
            </button>
            <button
              className="bg-white bg-opacity-80 text-gray-800 px-6 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-opacity-100 w-[100px] text-center"
              onClick={() => setTimeLeft(mode === "work" ? 5 * 60 : 1 * 60)}
            >
              Reset
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimerPage;
