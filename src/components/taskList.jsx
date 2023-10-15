import React, { useState } from 'react';
import SortableTable from './sortableTable.jsx';

function TaskList({ tasksData, taskColumns }) {
  const [showCompleted, setShowCompleted] = useState(false);

  // Filter tasks based on the showCompleted state
  const filteredTasks = showCompleted
    ? tasksData
    : tasksData.filter((task) => !task.completed);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Personal Task List</h2>
      <div className="flex justify-end">
        <button className="px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white">
          Add Task
        </button>
      </div>

      <div className="mb-4">
        <label className="mr-2">Show Completed Tasks:</label>
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={() => setShowCompleted(!showCompleted)}
        />
      </div>

      <SortableTable data={filteredTasks} columns={taskColumns} />
    </div>
  );
}

export default TaskList;
