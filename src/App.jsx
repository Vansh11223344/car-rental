import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RentalHistory from './pages/RentalHistory';
import Maintenance from './pages/Maintenance';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/rental-history" element={<RentalHistory />} />
          <Route path="/maintenance" element={<Maintenance />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;