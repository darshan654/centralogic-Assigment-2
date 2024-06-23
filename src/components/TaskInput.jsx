import React from 'react';

const TaskInput = ({ inputValue, onInputChange,onAddTask }) => (
  <div className="mb-4">
    <input
      type="text"
      placeholder="Enter task"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-shadow"
      value={inputValue}
      onChange={onInputChange}
    />
    <button
      onClick={onAddTask}
      className="bg-blue-500 text-white px-8 py-3 rounded-lg text-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all mb-4 mt-2"
    >
      Add Task
    </button>
  </div>
);

export default TaskInput;
