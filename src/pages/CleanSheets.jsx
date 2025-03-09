import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';

const CleanSheets = () => {
  const goalkeepers = [
    { name: 'ARJUN P', team: 'BATHAKKA FC', cleanSheets: 3, matchesPlayed: 4, goalsConceded: 3 },
    { name: 'SHAHAN', team: 'GUNNERS FC', cleanSheets: 4, matchesPlayed: 4, goalsConceded: 0 },
    { name: 'FAZIL', team: 'SPORTING FC', cleanSheets: 4, matchesPlayed: 5, goalsConceded: 1 },
    { name: 'SHARATH', team: 'SANTOS FC', cleanSheets: 1, matchesPlayed: 4, goalsConceded: 3 },
    { name: 'AKASH KS', team: 'TIHAR FC', cleanSheets: 1, matchesPlayed: 2, goalsConceded: 2 },
    { name: 'RAGIN', team: 'TIHAR FC', cleanSheets: 0, matchesPlayed: 2, goalsConceded: 4 },
    { name: 'AWIN', team: 'CS UNITED', cleanSheets: 2, matchesPlayed: 4, goalsConceded: 2 },
    { name: 'KARTHIK', team: 'FC REMONTADA', cleanSheets: 1, matchesPlayed: 4, goalsConceded: 3 },
    { name: 'ADITHYA', team: 'SHARTAAN FC', cleanSheets: 3, matchesPlayed: 5, goalsConceded: 1 },
  ];

  // Sort the goalkeepers array
  const sortedGoalkeepers = goalkeepers.sort((a, b) => {
    // First, sort by clean sheets in descending order
    if (b.cleanSheets !== a.cleanSheets) {
      return b.cleanSheets - a.cleanSheets;
    }
    // If clean sheets are equal, sort by matches played in ascending order
    if (a.matchesPlayed !== b.matchesPlayed) {
      return a.matchesPlayed - b.matchesPlayed;
    }
    // If matches played are equal, sort by goals conceded in ascending order
    return a.goalsConceded - b.goalsConceded;
  });

  return (
    <div className="clean-sheets">
      <h2><FaShieldAlt /> Most Clean Sheets</h2>
      <div className="table-container">
        <div className="table-header">
          <span>Rank</span>
          <span>Goalkeeper</span>
          <span>Team</span>
          <span>Clean Sheets</span>
          <span>Matches Played</span>
          <span>Goals Conceded</span>
        </div>
        {sortedGoalkeepers.map((gk, index) => (
          <div key={index} className="table-row">
            <span>{index + 1}</span>
            <span>{gk.name}</span>
            <span>{gk.team}</span>
            <span>{gk.cleanSheets}</span>
            <span>{gk.matchesPlayed}</span>
            <span>{gk.goalsConceded}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CleanSheets;