import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => setInputValue(e.target.value);

    const handleAddTask = () => {
        if (inputValue.trim() !== '') {
            setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false, time: new Date().toLocaleString() }]);
            setInputValue('');
        }
    };


    const handleToggleTask = (taskId) => {
        setTasks(tasks.map(task => (        //completed: !task.
                                            //completed toggles the completed property of the //
                                            //task (from false to true or vice versa).
            task.id === taskId ? { ...task, completed: !task.completed } : task
        )));
    };

    const handleDeleteTask = (taskId) => setTasks(tasks.filter(task => task.id !== taskId));


    return (
        <div className="text-center">
            <h2 className="text-4xl font-semibold mb-8 text-gray-800">Task Manager</h2>
            <TaskInput inputValue={inputValue} onInputChange={handleInputChange} onAddTask={handleAddTask} />
            <TaskList tasks={tasks} onToggleTask={handleToggleTask} onDeleteTask={handleDeleteTask} />
        </div>
    );
};

export default TaskManager;
