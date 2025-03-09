import React from "react";
import { FaTrophy, FaFutbol, FaShieldAlt, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to GEC Soccer League</h1>
        <p>Stay updated with the latest scores, standings, and player stats!</p>
        <div className="cta-buttons">
          <Link to="/points-table" className="cta-button">
            <FaTrophy /> View Standings
          </Link>
          <Link to="/fixtures" className="cta-button">
            <FaCalendarAlt /> Check Fixtures
          </Link>
        </div>
      </div>

      <div className="highlights" style={{ display: "flex" }}>
        <div className="highlight-card">
          <FaFutbol className="highlight-icon" />
          <h3>Top Scorers</h3>
          <p>See who's leading the goal-scoring charts.</p>
          <Link to="/top-scorers" className="highlight-link">
            View Top Scorers →
          </Link>
        </div>
        <div className="highlight-card">
          <FaShieldAlt className="highlight-icon" />
          <h3>Clean Sheets</h3>
          <p>Discover the best goalkeepers in the league.</p>
          <Link to="/clean-sheets" className="highlight-link">
            View Clean Sheets →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
