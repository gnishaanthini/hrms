import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LeaveApplication from './pages/LeaveApplication';
import ViewLeave from './pages/ViewLeave';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={< Home />}></Route>
          <Route path='/leaveApplication' element={< LeaveApplication />}></Route> 
          <Route path='/viewLeave' element={<ViewLeave />}></Route> 
        </Routes>
      </Router>
    </>
  );
}

export default App;