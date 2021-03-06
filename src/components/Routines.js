import React, { useEffect } from "react";
const APIURL = `https://fitnesstrac-kr.herokuapp.com/api`;

const Routines = ({ setRoutines, routines, token }) => {
  const fetchRoutines = async () => {
    const resp = await fetch(`${APIURL}/routines`);
    const data = await resp.json();
    if (data) {
      setRoutines(data);
    }
  };

  useEffect(() => {
    fetchRoutines();
  }, [token]);

  return (
    <>
      <h1 className="title">Routines</h1>
      {routines.map((routine) => (
        <div className="routine" key={routine.id}>
          <h2>{routine.name}</h2>
          <h4>{routine.goal}</h4>
          <h5>Creator: {routine.creatorName}</h5>

          <h2>Activities:</h2>
          {routine.activities.map((activity) => (
            <div className="activity" key={activity.id}>
              <h3>{activity.name}</h3>
              <h4>Description: {activity.description}</h4>
              <h4>Count: {activity.count}</h4>
              <h4>Duration: {activity.duration}</h4>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Routines;
