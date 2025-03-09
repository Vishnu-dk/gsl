import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import PointsTable from './pages/PointsTable';
import TopScorers from './pages/TopScorers';
import CleanSheets from './pages/CleanSheets';
import Fixtures from './pages/Fixtures';

import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/points-table" element={<PointsTable />} />
          <Route path="/top-scorers" element={<TopScorers />} />
          <Route path="/clean-sheets" element={<CleanSheets />} />
          <Route path="/fixtures" element={<Fixtures />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;