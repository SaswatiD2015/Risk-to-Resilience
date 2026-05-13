import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; // Ensure this file exists
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'; // Home Page component
import AnalysisPage from './components/AnalysisPage'; // Analysis Page component
import RecommendationPage from './components/RecommendationPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* Home Page Route */}
      <Route path="/analysis" element={<AnalysisPage />} /> {/* Analysis Page Route */}
      <Route path="/recommendation" element={<RecommendationPage />} />
    </Routes>
  </Router>
);
