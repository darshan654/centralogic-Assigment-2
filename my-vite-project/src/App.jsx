import React, { useState } from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-96 bg-white p-8 rounded-xl shadow-lg">
        <Counter />
      </div>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-4xl font-semibold mb-8 text-gray-800">Counter</h2>
      <div className="flex justify-center items-center space-x-8">
        <button
          className="bg-blue-500 text-white px-8 py-4 rounded-lg text-3xl hover:bg-blue-600 transition-colors"
          onClick={increment}
        >
          +
        </button>
        <span className="text-4xl font-bold text-gray-700">{count}</span>
        <button
          className="bg-red-500 text-white px-8 py-4 rounded-lg text-3xl hover:bg-red-600 transition-colors"
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default App;
