import React, { useState } from 'react';
import SortableTable from '../components/sortableTable.jsx';
import TaskList from '../components/taskList.jsx';

const initialTasks = [
  { id: 'PJC0002', title: 'Product Review', project_name: 'Project C',feed_from:'Joseph Stalin',task_create_date: '2023-09-02',task_deadline: '2023-09-05',label: 'delay',completed: '' },
  { id: 'PJD0009', title: 'Proft Testing', project_name: 'Project D',feed_from:'Karl Marx',task_create_date: '2023-10-12',task_deadline: '2023-10-15',label: 'in-progress',completed: '' },
  { id: 'PJF0010', title: 'Get PGC Approval', project_name: 'Project F',feed_from:'Nicolei Tesla',task_create_date: '2023-09-23',task_deadline: '2023-09-30',label: 'in-progress',completed: '' },
  { id: 'PJA0008', title: 'UW Product Verification', project_name: 'Project A',feed_from:'Antonio Gramsci',task_create_date: '2023-08-27',task_deadline: '2023-09-05',label: '',completed: <button className=' bg-lime-600 cursor-default'> Complete </button> },
  { id: 'PJB0002', title: 'PD Proposal Verification', project_name: 'Project B',feed_from:'Vinsmoke Judge',task_create_date: '2023-10-22',task_deadline: '2023-10-25',label: 'new',completed: '' },
  // Add more tasks as needed
];

const taskColumns = [
  {
    field: 'id',
    label: 'Task ID',
  },
  {
    field: 'title',
    label: 'Task Title',
  },  
  {
    field: 'project_name',
    label: 'Project Name',
  },
  {
    field: 'feed_from',
    label: 'Feed From',
  },
  {
    field: 'task_create_date',
    label: 'Task Create Date',
  },
  {
    field: 'task_deadline',
    label: 'Task Deadline',
  },
  {
    field: 'label',
    label: 'Task Status',
  },
  {
    field: 'completed',
    label: 'Completed',
  },
];


const initialProject = [
    {
      "id": 'PID20230115104033',
      "project_name": "Project A",
      "owner": "John Doe",
      "create_date": "2023-01-15",
      "launch_date": "2023-03-01",
      "current_project_status": "Profit Testing",
      "current_officer": "Alice Smith"
    },
    {
      "id": 'PID20230210104033',
      "project_name": "Project B",
      "owner": "Jane Smith",
      "create_date": "2023-02-10",
      "launch_date": "2023-04-15",
      "current_project_status": "PD Review Proposal",
      "current_officer": "Bob Johnson"
    },
    {
      "id": 'PID20230320104033',
      "project_name": "Project C",
      "owner": "Ella Johnson",
      "create_date": "2023-03-20",
      "launch_date": "2023-05-30",
      "current_project_status": "UW Review Price",
      "current_officer": "Charlie Brown"
    },{
      "id": 'PID20230405104033',
      "project_name": "Project D",
      "owner": "Grace Lee",
      "create_date": "2023-04-05",
      "launch_date": "2023-06-20",
      "current_project_status": "PGC Approval",
      "current_officer": "David Wilson"
    },
    {
      "id": 'PID20230512104033',
      "project_name": "Project E",
      "owner": "Oliver Turner",
      "create_date": "2023-05-12",
      "launch_date": "2023-07-10",
      "current_project_status": "PGC Approval",
      "current_officer": "Emma Martinez"
    },
    {
      "id": 'PID20230618104033',
      "project_name": "Project F",
      "owner": "Sophia Brown",
      "create_date": "2023-06-18",
      "launch_date": "2023-08-25",
      "current_project_status": "PD Review Proposal",
      "current_officer": "Liam Garcia"
    },
    {
      "id": 'PID20230725104033',
      "project_name": "Project G",
      "owner": "Lucas Adams",
      "create_date": "2023-07-25",
      "launch_date": "2023-09-12",
      "current_project_status": "PD Product Setup",
      "current_officer": "Olivia Smith"
    },
    {
      "id": 'PID20230810104033',
      "project_name": "Project H",
      "owner": "Mia Hernandez",
      "create_date": "2023-08-10",
      "launch_date": "2023-10-01",
      "current_project_status": "Completed",
      "current_officer": "Noah Davis"
    },
    {
      "id": 'PID20230903104033',
      "project_name": "Project I",
      "owner": "Ethan Jackson",
      "create_date": "2023-09-03",
      "launch_date": "2023-11-05",
      "current_project_status": "Completed",
      "current_officer": "Ava White"
    },
    {
      "id": 'PID20231020104033',
      "project_name": "Project J",
      "owner": "Isabella Thomas",
      "create_date": "2023-10-20",
      "launch_date": "2023-12-15",
      "current_project_status": "PD Review Proposal",
      "current_officer": "Liam Taylor"
    }
    // Add more initialProject objects as needed
  ];
  const columns = [
    {
      field: 'id',
      label: 'Proposal ID',
    },
    {
      field: 'project_name',
      label: 'Project Name',
    },
    {
      field: 'owner',
      label: 'Owner',
    },
    {
      field: 'create_date',
      label: 'Create Date',
    },
    {
      field: 'launch_date',
      label: 'Launch Date',
    },
    {
      field: 'current_project_status',
      label: 'Current Status',
    },
    {
      field: 'current_officer',
      label: 'Current Officer',
    },
  ];
  

function Task() {

  return (
    <div className='p-4'>
      <div className='my-4 p-4 border-indigo-500 rounded-lg shadow-sm shadow-gray-200 drop-shadow-sm bg-white'>
        <h2 className="text-2xl font-semibold mb-4">Project Tracker</h2>
        <SortableTable data={initialProject} columns={columns} />
      </div>
      <div className='my-4 p-4 border-indigo-500 rounded-lg shadow-sm shadow-gray-200 drop-shadow-sm bg-white'>
        <TaskList tasksData={initialTasks} taskColumns={taskColumns} />
      </div>
    </div>
  );
}

export default Task;
