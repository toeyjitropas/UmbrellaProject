import React, { useState } from 'react';

const initialTasks = [
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: true },
  { id: 3, title: 'Task 3', completed: false },
  // Add more tasks as needed
];

function Task() {
  const [tasks, setTasks] = useState(initialTasks);

  // Function to toggle task completion status
  const toggleTaskStatus = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className='p-4'>
      <h2 className="text-2xl font-semibold mb-4">Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-2 border-b ${
              task.completed ? 'bg-green-100' : ''
            }`}
          >
            <span>{task.title}</span>
            <button
              className={`px-2 py-1 rounded ${
                task.completed ? 'bg-gray-300' : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
              onClick={() => toggleTaskStatus(task.id)}
            >
              {task.completed ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
