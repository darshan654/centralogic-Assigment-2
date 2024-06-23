import React from 'react';
import TaskManager from './components/TaskManager';

const App = () => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-300 to-purple-400 p-28 ml-28">
    <div className="w-full max-w-2xl">
      <div className="bg-white p-8 rounded-xl shadow-2xl">
        <TaskManager />
      </div>
    </div>
  </div>
);

export default App;
