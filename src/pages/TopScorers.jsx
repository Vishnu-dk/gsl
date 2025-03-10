import React from 'react';
import { FaFutbol } from 'react-icons/fa';

const TopScorers = ({ teamsWithPoints = [] }) => {
  const scorers = [
    { name: 'ARJUN', team: 'FC REMONTADA', goals: 1 },
    { name: 'FAHEEM', team: 'FC REMONTADA', goals: 2 },
    { name: 'SINAN', team: 'FC REMONTADA', goals: 2 },
    { name: 'MISHEL', team: 'SPORTING FC', goals: 3 },
    { name: 'SONU', team: 'SPORTING FC', goals: 1 },
    { name: 'RAHID', team: 'SPORTING FC', goals: 1 },
    { name: 'SUJITH', team: 'GUNNERS FC', goals: 1 },
    { name: 'SREEHARI', team: 'CS UNITED', goals: 2 },
    { name: 'JISHNU', team: 'CS UNITED', goals: 2 },
    { name: 'AKHIL P', team: 'CS UNITED', goals: 1 },
    { name: 'NANDHAKISHOR', team: 'SHARTAAN FC', goals: 1 },
    { name: 'AKHIL', team: 'SHARTAAN FC', goals: 1 },
    { name: 'SOORYAKIRAN', team: 'TIHAR FC', goals: 1 },
    { name: 'NABEEL', team: 'BATHAKKA FC', goals: 1 },
    { name: 'ADEEB', team: 'BATHAKKA FC', goals: 1 },
    { name: 'HASHIM', team: 'SANTOS FC', goals: 1 },
    { name: 'YASEEN', team: 'SANTOS FC', goals: 1 },
  ];

  // Debugging: Log the teamsWithPoints prop
  console.log('teamsWithPoints:', teamsWithPoints);

  // Add matchesPlayed and teamPoints to each scorer
  const scorersWithTeamData = scorers.map((scorer) => {
    const team = teamsWithPoints.find((team) => team.name === scorer.team);
    return {
      ...scorer,
      matchesPlayed: team ? team.played : 0, // Fallback to 0 if team not found
      teamPoints: team ? team.points : 0, // Fallback to 0 if team not found
    };
  });

  // Debugging: Log the mapped scorersWithTeamData
  console.log('scorersWithTeamData:', scorersWithTeamData);

  // Sort the scorers array
  const sortedScorers = scorersWithTeamData.sort((a, b) => {
    // First, sort by goals in descending order
    if (b.goals !== a.goals) {
      return b.goals - a.goals;
    }
    // If goals are equal, sort by matches played in ascending order
    if (a.matchesPlayed !== b.matchesPlayed) {
      return a.matchesPlayed - b.matchesPlayed;
    }
    // If matches played are equal, sort by team points in descending order
    return b.teamPoints - a.teamPoints;
  });

  return (
    <div className="top-scorers">
      <h2><FaFutbol /> Top Scorers</h2>
      <div className="table-container">
        <div className="table-header">
          <span>Rank</span>
          <span>Player</span>
          <span>Team</span>
          <span>Goals</span>

        </div>
        {sortedScorers.map((player, index) => (
          <div key={index} className="table-row">
            <span>{index + 1}</span>
            <span>{player.name}</span>
            <span>{player.team}</span>
            <span>{player.goals}</span>

          </div>
        ))}
      </div>
    </div>
  );
};

export default TopScorers;