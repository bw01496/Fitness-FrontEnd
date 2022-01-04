import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Routines from "./components/Routines";

const App = () => {
  const [routines, setRoutines] = useState([]);

  return (
    <>
      <header>
        <h1 className="title">Fitness Tracker</h1>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="api/routines">Routines</Link>
        <br></br>
        <Link to="api/activities">Activities</Link>
        <br></br>
        <Link to="/account/login">Login</Link>
        <br></br>
        <Link to="/account/register">Register</Link>
      </header>
      <Routes>
        <Route
          path="api/routines"
          element={<Routines setRoutines={setRoutines} routines={routines} />}
        />
        <Route
          path="/account/login"
          element={<Login setToken={setToken} setUsers={setUsers} />}
        />
        <Route
          path="/account/register"
          element={<Register setToken={setToken} setUsers={setUsers} />}
        />
      </Routes>
    </>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
