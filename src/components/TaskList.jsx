import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => (
  <div className="mt-4">
    {tasks.map(task => (
      <TaskItem
        key={task.id}
        task={task}
        onToggleTask={onToggleTask}
        onDeleteTask={onDeleteTask}
      />
    ))}
  </div>
);

export default TaskList;
    