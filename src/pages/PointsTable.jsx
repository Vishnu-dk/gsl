import React from "react";
import { FaTrophy } from "react-icons/fa";
import "../App.css";
import teams from "../utils/teampoints";

const PointsTable = ({ matches = [] }) => {
  // const teams = [
  //   {
  //     name: "BATHAKKA FC",
  //     logo: "/logos/BATHAKKA FC.png",
  //     played: 4,
  //     wins: 1,
  //     draws: 2,
  //     losses: 1,
  //     goalsFor: 2,
  //     goalsAgainst: 3,
  //   },
  //   {
  //     name: "SPORTING FC",
  //     logo: "/logos/SPORTING FC.png",
  //     played: 5,
  //     wins: 3,
  //     draws: 2,
  //     losses: 0,
  //     goalsFor: 5,
  //     goalsAgainst: 1,
  //   },
  //   {
  //     name: "SANTOS FC",
  //     logo: "/logos/SANTOS FC.png",
  //     played: 5,
  //     wins: 1,
  //     draws: 1,
  //     losses: 3,
  //     goalsFor: 2,
  //     goalsAgainst: 3,
  //   },
  //   {
  //     name: "TIHAR FC",
  //     logo: "/logos/TIHAR FC.png",
  //     played: 5,
  //     wins: 0,
  //     draws: 1,
  //     losses: 4,
  //     goalsFor: 1,
  //     goalsAgainst: 8,
  //   },
  //   {
  //     name: "CS UNITED",
  //     logo: "/logos/CS-UNITED.png",
  //     played: 4,
  //     wins: 2,
  //     draws: 2,
  //     losses: 0,
  //     goalsFor: 5,
  //     goalsAgainst: 2,
  //   },
  //   {
  //     name: "FC REMONTADA",
  //     logo: "/logos/F C REMONTADA.png",
  //     played: 4,
  //     wins: 2,
  //     draws: 0,
  //     losses: 2,
  //     goalsFor: 5,
  //     goalsAgainst: 4,
  //   },
  //   {
  //     name: "GUNNERS FC",
  //     logo: "/logos/GUNNERS FC.png",
  //     played: 4,
  //     wins: 1,
  //     draws: 3,
  //     losses: 0,
  //     goalsFor: 1,
  //     goalsAgainst: 0,
  //   },
  //   {
  //     name: "SHARTAAN FC",
  //     logo: "/logos/SHARTAAN FC.png",
  //     played: 5,
  //     wins: 1,
  //     draws: 3,
  //     losses: 1,
  //     goalsFor: 2,
  //     goalsAgainst: 2,
  //   },
  // ];

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

  // Sort teams by points, then head-to-head, then goal difference
  const sortedTeams = teamsWithPoints.sort((a, b) => {
    // Sort by points (descending)
    if (b.points !== a.points) {
      return b.points - a.points;
    }

    // Head-to-head comparison
    const headToHead = headToHeadResults[a.name]?.[b.name] || 0;
    if (headToHead !== 0) {
      return headToHead;
    }

    // If head-to-head is also tied, sort by goal difference
    const goalDifferenceA = a.goalsFor - a.goalsAgainst;
    const goalDifferenceB = b.goalsFor - b.goalsAgainst;
    return goalDifferenceB - goalDifferenceA;
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

      {/* Pass teamsWithPoints to TopScorers */}
    </div>
  );
};

export default PointsTable;
