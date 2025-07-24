import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JobListings from './pages/JobListings';
import JobDetail from './pages/JobDetail';
import EmployerDashboard from './pages/EmployerDashboard';
import CandidateDashboard from './pages/CandidateDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobListings />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/employer" element={<EmployerDashboard />} />
        <Route path="/candidate" element={<CandidateDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
