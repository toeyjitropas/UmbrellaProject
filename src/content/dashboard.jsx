import React from 'react';

// Sample data for widgets
const widgetsData = {
  tasksPending: 15,
  tasksComplete: 75,
  tasksDelay: 5,
  salesData: [100, 150, 120, 200, 180, 250, 300, 280, 320, 350, 400, 380],
  projectStatus: 'On Track',
  profitability: '$25,000',
  turnaroundTime: '2 days',
};

function Dashboard() {
  return (
        <div className="p-6">
          <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
          <div className="grid grid-cols-2 gap-6 mt-6">
            {/* Task Widgets */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800">Tasks</h2>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="text-center">
                  <div className="text-2xl font-semibold">{widgetsData.tasksPending}</div>
                  <p className="text-gray-500">Pending</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold">{widgetsData.tasksComplete}</div>
                  <p className="text-gray-500">Complete</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold">{widgetsData.tasksDelay}</div>
                  <p className="text-gray-500">Delay</p>
                </div>
              </div>
            </div>

            {/* Sales Trend Line Graph */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800">Sales Trend</h2>
              {/* Add a line graph here using a chart library like Chart.js */}
            </div>

            {/* Project Status */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800">Project Status</h2>
              <p className="text-2xl font-semibold text-green-500">
                {widgetsData.projectStatus}
              </p>
            </div>

            {/* Profitability */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800">Profitability</h2>
              <p className="text-2xl font-semibold text-blue-500">
                {widgetsData.profitability}
              </p>
            </div>

            {/* Turnaround Time */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800">Turnaround Time</h2>
              <p className="text-2xl font-semibold text-red-500">
                {widgetsData.turnaroundTime}
              </p>
            </div>

            {/* Add more widgets as needed */}
          </div>
        </div>
  );
}

export default Dashboard;
