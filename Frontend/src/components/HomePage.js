import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';  // Correct path to styles.css


const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="map-background"></div>
      <div className="title-container">
        <h1 className="title">Risk to Resilience</h1>
        <button className="enter-button" onClick={() => navigate('/analysis')}>
          Enter Analysis
        </button>
      </div>
    </div>
  );
};

export default HomePage;
