import React, { useState } from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-300 to-purple-400 p-28 ml-28">
  <div className="w-full max-w-2xl">
    <div className="bg-white p-8 rounded-xl shadow-2xl">
      <TaskManager />
    </div>
  </div>
</div>

  );
};

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false, time: new Date().toLocaleString() }]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleToggleTask = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  return (
    <div className="text-center">
      <h2 className="text-4xl font-semibold mb-8 text-gray-800">Task Manager</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter task"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-shadow"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white px-8 py-3 rounded-lg text-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all mb-4"
      >
        Add Task
      </button>
      <div className="mt-4">
        {tasks.map(task => (
          <div key={task.id} className="flex items-center justify-between mb-2 p-2 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition-colors">
            <div className={`text-xl ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
              <div>{task.text}</div>
              <div className="text-sm text-gray-500">{task.time}</div>
            </div>
            <div>
              <button
                onClick={() => handleToggleTask(task.id)}
                className="text-green-500 hover:text-green-700 mr-2"
              >
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
