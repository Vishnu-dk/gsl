import React from "react";
import Fixtures from "./Fixtures";

const Matches = () => {
  const matches = [
    {
      date: "2025-03-04",
      teamA: "FC REMONTADA",
      teamB: "SPORTING FC",
      result: "1-2 ",
    },
    {
      date: "2025-03-04",
      teamA: "GUNNERS FC",
      teamB: "SANTOS FC",
      result: "1-0",
    },
    {
      date: "2025-03-05",
      teamA: "SHARTAAN FC",
      teamB: "CS UNITED",
      result: "1-1",
    },
    {
      date: "2025-03-05",
      teamA: "BATTAKKA FC",
      teamB: "THIHAR FC",
      result: "0-0",
    },
    {
      date: "2025-03-05",
      teamA: "FC REMONTADA",
      teamB: "SANTOS FC",
      result: "1-0",
    },
    {
      date: "2025-03-06",
      teamA: "GUNNERS FC",
      teamB: "SPORTING FC",
      result: "0-0",
    },
    {
      date: "2025-03-06",
      teamA: "TIHAR FC",
      teamB: "SHARTAAN FC",
      result: "0-1",
    },
    {
      date: "2025-03-06",
      teamA: "CS UNITED",
      teamB: "BATTAKKA FC",
      result: "3-1",
    },
    {
      date: "2025-03-07",
      teamA: "SANTOS FC",
      teamB: "SHARTAAN FC",
      result: "0-0",
    },
    {
      date: "2025-03-07",
      teamA: "FC REMONTADA",
      teamB: "TIHAR FC",
      result: "3-1",
    },
    {
      date: "2025-03-07",
      teamA: "CS UNITED",
      teamB: "SPORTING FC",
      result: "0-0",
    },
    {
      date: "2025-03-08",
      teamA: "SANTOS FC",
      teamB: "BATTAKKA FC",
      result: "0-1",
    },
    {
      date: "2025-03-08",
      teamA: "SHARTAAN FC",
      teamB: "GUNNERS FC",
      result: "0-0",
    },
    {
      date: "2025-03-08",
      teamA: "SPORTING FC",
      teamB: "TIHAR FC",
      result: "2-0",
    },
    {
      date: "2025-03-09",
      teamA: "CS UNITED",
      teamB: "FC REMONTADA",
      result: "1-0",
    },
    {
      date: "2025-03-09",
      teamA: "SHARTAAN FC",
      teamB: "SPORTING FC",
      result: '0-1',
    }, 
    {
      date: "2025-03-09",
      teamA: "BATTAKKA FC",
      teamB: "GUNNERS FC",
      result: '0-0',
    },
    { date: "2025-03-10", teamA: "TIHAR FC", teamB: "SANTOS FC", result: '0-2' }, 
    {
      date: "2025-03-10",
      teamA: "CS UNITED",
      teamB: "GUNNERS FC",
      result: '1-0',
    }, 
    {
      date: "2025-03-10",
      teamA: "REMONTADA FC",
      teamB: "SHARTAAN FC",
      result: '2-0',
    }, 
    {
      date: "2025-03-11",
      teamA: "BATTAKKA FC",
      teamB: "SPORTING FC",
      result: '0-0',
    }, 
    { date: "2025-03-11", teamA: "TIHAR FC", teamB: "CS UNITED", result: '2-2' }, 
    {
      date: "2025-03-11",
      teamA: "GUNNERS FC",
      teamB: "FC REMONTADA",
      result: '0-1',
    }, 
    {
      date: "2025-03-12",
      teamA: "SHARTAAN FC",
      teamB: "BATTAKKA FC",
      result: '0-1',
    }, 
    {
      date: "2025-03-12",
      teamA: "SANTOS FC",
      teamB: "SPORTING FC",
      result: '0-3',
    }, 
    {
      date: "2025-03-12",
      teamA: "GUNNERS FC",
      teamB: "TIHAR FC",
      result: '2-1',
    }, 
    {
      date: "2025-03-13",
      teamA: "FC REMONTADA",
      teamB: "BATTAKKA FC",
      result: '2-1',
    }, 
    {
      date: "2025-03-13",
      teamA: "CS UNITED",
      teamB: "SANTOS FC",
      result: '0-1',
    }, 
  ];

  // // Debugging: Log the matches data
  // console.log("Matches Data:", matches);

  return (
    <div className="mt-2" style={{marginTop: "8px"}}>
      <Fixtures matches={matches} />
    </div>
  );
};

export default Matches;
