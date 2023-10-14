import  Home  from './pages/home.jsx';
import Dashboard from './content/dashboard.jsx';
import Task from './content/task.jsx';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './content/login.jsx';



function App() {

  const usrJson = {"name": "Amigo Homie", "role": "admin", "initial": "AH"};
  return (
    <>
      {/* <Home page={<Dashboard /> } children={'Dashboard'} user={usrJson} /> */}
      <Router>
        <Routes>
          <Route path='/' element={<Home page={<Dashboard /> } children={'Dashboard'} user={usrJson} />} />
          <Route path='/login' element={<Login />} />
          <Route path="/dashboard" element={<Home page={<Dashboard /> } children={'Dashboard'} user={usrJson} />} />
          <Route path="/task" element={<Home page={<Task /> } children={'Task'} user={usrJson} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
