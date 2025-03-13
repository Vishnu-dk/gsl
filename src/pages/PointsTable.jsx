import React from "react";
import { FaTrophy } from "react-icons/fa";
import "../App.css";
import teams from "../utils/teampoints";

const PointsTable = ({ matches = [] }) => {
  // Calculate points for each team
  const teamsWithPoints = teams.map((team) => ({
    ...team,
    points: team.wins * 3 + team.draws * 1, // 3 points for a win, 1 point for a draw
  }));

  // Function to extract head-to-head results from matches
  const getHeadToHeadResults = () => {
    const headToHeadResults = {};

    // Ensure matches is defined before iterating
    if (!matches || !Array.isArray(matches)) {
      console.error("Invalid matches data:", matches);
      return headToHeadResults;
    }

    matches.forEach((match) => {
      const { teamA, teamB, result } = match;

      // Check if the result is defined and in the correct format
      if (!result || typeof result !== "string") {
        console.error(`Invalid result format for match: ${teamA} vs ${teamB}`);
        return;
      }

      const [goalsA, goalsB] = result.split("-").map(Number);

      // Initialize head-to-head data if not already present
      if (!headToHeadResults[teamA]) headToHeadResults[teamA] = {};
      if (!headToHeadResults[teamB]) headToHeadResults[teamB] = {};

      // Store the result for teamA vs teamB
      headToHeadResults[teamA][teamB] =
        goalsA > goalsB ? 1 : goalsA === goalsB ? 0 : -1;
      headToHeadResults[teamB][teamA] =
        goalsB > goalsA ? 1 : goalsB === goalsA ? 0 : -1;
    });

    return headToHeadResults;
  };

  const headToHeadResults = getHeadToHeadResults();

  // Sort teams by points, then draws, then goals scored, then goal difference, then goals conceded
  const sortedTeams = teamsWithPoints.sort((a, b) => {
    // 1. Sort by points (descending)
    if (b.points !== a.points) {
      return b.points - a.points;
    }

    // 2. Sort by number of draws (descending)
    if (b.draws !== a.draws) {
      return b.draws - a.draws;
    }

    // 3. Sort by goals scored (descending)
    if (b.goalsFor !== a.goalsFor) {
      return b.goalsFor - a.goalsFor;
    }

    // 4. Sort by goal difference (descending)
    const goalDifferenceA = a.goalsFor - a.goalsAgainst;
    const goalDifferenceB = b.goalsFor - b.goalsAgainst;
    if (goalDifferenceB !== goalDifferenceA) {
      return goalDifferenceB - goalDifferenceA;
    }

    // 5. Sort by goals conceded (ascending)
    return a.goalsAgainst - b.goalsAgainst;
  });

  return (
    <div>
      <div className="points-table">
        <h2>
          <FaTrophy /> Points Table
        </h2>
        <div className="table-container">
          <div className="table-header">
            <span>Pos</span>
            <span>Team</span>
            <span>P</span>
            <span>W</span>
            <span>D</span>
            <span>L</span>
            <span>GF</span>
            <span>GA</span>
            <span>GD</span>
            <span>Pts</span>
          </div>
          {sortedTeams.map((team, index) => (
            <div key={index} className="table-row">
              <span className="position">{index + 1}</span>
              <span className="team">
                <img
                  src={team.logo}
                  alt={team.name}
                  className="team-logo"
                  onError={(e) => {
                    e.target.src = "/logos/default-logo.png"; // Fallback logo
                  }}
                />
                {team.name}
              </span>
              <span>{team.played}</span>
              <span>{team.wins}</span>
              <span>{team.draws}</span>
              <span>{team.losses}</span>
              <span>{team.goalsFor}</span>
              <span>{team.goalsAgainst}</span>
              <span>{team.goalsFor - team.goalsAgainst}</span>
              <span className="points">{team.points}</span>
            </div>
          ))}
        </div>
        <div className="legend">
          <p>
            * P: Played, W: Wins, D: Draws, L: Losses, GF: Goals For, GA: Goals
            Against, GD: Goal Difference, Pts: Points
          </p>
        </div>
      </div>
    </div>
  );
};

export default PointsTable;