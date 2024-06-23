import React from 'react';

const TaskItem = ({ task, onToggleTask, onDeleteTask }) => (
  <div className="flex items-center justify-between mb-2 p-2 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition-colors">
    <div className={`text-xl ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
      <div>{task.text}</div>
      <div className="text-sm text-gray-500">{task.time}</div>
    </div>
    <div>
      <button
        onClick={() => onToggleTask(task.id)}
        className="text-green-500 hover:text-green-700 mr-2"
      >
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button
        onClick={() => onDeleteTask(task.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  </div>
);

export default TaskItem;
