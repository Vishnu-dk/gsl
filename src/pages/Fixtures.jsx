import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

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
        <div> {/*   Qualifier 1 */}
          <div
            className="heading"
            style={{ textAlign: "center", padding: "8px", fontSize: "18px" }}
          >
            QUALIFIER 1
          </div>
          <div className="table-row">
            <span>2025-03-14</span>
            <span>SPORTING FC VS CS UNITED</span>
            <span
              style={{
                color: "#a31621",
                fontWeight: 600,
              }}
            >
              Upcoming
            </span>
          </div>
        </div>
        <div> {/*   Eliminator 1 */}
          <div
            className="heading"
            style={{ textAlign: "center", padding: "8px", fontSize: "18px" }}
          >
            ELIMINATOR 1
          </div>
          <div className="table-row">
            <span>2025-03-14</span>
            <span>BATHAKKA FC VS FC REMONTADA</span>
            <span
              style={{
                color: "#a31621",
                fontWeight: 600,
              }}
            >
              Upcoming
            </span>
          </div>
        </div>
        <div> {/*   Qualifier 2 */}
          <div
            className="heading"
            style={{ textAlign: "center", padding: "8px", fontSize: "18px" }}
          >
            QUALIFIER 2 
          </div>
          <div className="table-row">
            <span>2025-03-15</span>
            <span>TBD VS TBD</span>
            <span
              style={{
                color: "#a31621",
                fontWeight: 600,
              }}
            >
              Upcoming
            </span>
          </div>
        </div>
        <div>  {/*   final */}
          <div
            className="heading"
            style={{ textAlign: "center", padding: "8px", fontSize: "18px" }}
          >
            FINAL 
          </div>
          <div className="table-row">
            <span>2025-03-16</span>
            <span>TBD VS TBD</span>
            <span
              style={{
                color: "#a31621",
                fontWeight: 600,
              }}
            >
              Upcoming
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fixtures;
