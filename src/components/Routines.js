import React, { useEffect, useState } from "react";
// import { callApi } from "../utils";
// import { Link } from "react-router-dom";
const { REACT_APP_API_URL } = process.env;
const Routines = ({ setRoutines, routines }) => {
  const fetchRoutines = async () => {
    const resp = await fetch(`${REACT_APP_API_URL}/routines`);
    const data = await resp.json();
    setRoutines(data);
  };

  useEffect(() => {
    fetchRoutines();
  }, []);

  return (
    <>
      <div>testing</div>
    </>
  );
};

export default Routines;
