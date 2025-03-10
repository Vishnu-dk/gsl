import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Matches from "./Matches";

const Fixtures = ({ matches = [] }) => {
  // Debugging: Log the matches prop
  // console.log("Fixtures Matches Prop:", matches);

  return (
    <div
      className="fixtures"
      style={{ paddingTop: "10px", paddingBottom: "10px" }}
    >
      <h2>
        <FaCalendarAlt /> Fixtures & Results
      </h2>
      <div className="table-container">
        <div className="table-header">
          <span>Date</span>
          <span>Match</span>
          <span>Result</span>
        </div>
        {matches.map((match, index) => (
          <div key={index} className="table-row">
            <span>{match.date}</span>
            <span>
              {match.teamA} vs {match.teamB}
            </span>
            <span
              style={{
                color: !match.result ? "#a31621" : "#1c1c1c",
                fontWeight: 600,
              }}
            >
              {match.result === null ? "Upcoming" : match.result}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fixtures;
