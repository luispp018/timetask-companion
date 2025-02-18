import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaClock } from 'react-icons/fa'; // Import the home and clock icons from react-icons

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const markTaskAsDone = (taskId) => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] flex flex-col">
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

      {/* Task List Container */}
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Task List Box */}
          <div className="bg-[#161b22] p-6 rounded-lg shadow-lg mb-6">
            <div className="flex justify-center mb-4">
              <h2 className="text-xl font-bold">Task List</h2>
            </div>
            <ul className="space-y-3">
              {tasks.map((task, index) => (
                <li key={task.id} className="flex flex-col items-center justify-between">
                  <div className="w-full flex items-center justify-between">
                    <span
                      className={`${task.completed ? 'text-red-500 line-through' : 'text-[#c9d1d9]'}`}
                    >
                      {task.text}
                    </span>
                    <div className="flex items-center gap-2">
                      {!task.completed && (
                        <button
                          onClick={() => markTaskAsDone(task.id)}
                          className="text-green-500 hover:text-green-700 focus:outline-none"
                        >
                          Done
                        </button>
                      )}
                      <button
                        onClick={() => removeTask(task.id)}
                        className="text-red-500 hover:text-red-700 focus:outline-none"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  {index < tasks.length - 1 && (
                    <hr className="w-3/4 border-t border-[#30363d] my-3" />
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Minimalistic Add Task Input and Button */}
          <div className="flex items-center border-b border-[#30363d] pb-2">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
              className="flex-1 bg-transparent text-[#c9d1d9] focus:outline-none"
              placeholder="Add a New Task..."
            />
            <button
              onClick={addTask}
              className="text-[#238636] hover:text-[#2ea043] focus:outline-none"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
