import  Home  from './components/home.jsx';
import Dashboard from './pages/dashboard.jsx';
import Task from './pages/task.jsx';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login.jsx';



function App() {

  const usrJson = {"name": "Edward Newgate", "role": "admin", "initial": "EN"};
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home page={<Dashboard /> } children={'Dashboard'} user={usrJson} />} />
          <Route path='/login' element={<Login />} />
          <Route path="/dashboard" element={<Home page={<Dashboard /> } children={'Dashboard'} user={usrJson} />} />
          <Route path="/task" element={<Home page={<Task /> } children={'Project Tracker'} user={usrJson} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
