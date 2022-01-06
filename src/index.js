import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Routines from "./components/Routines";
import Home from "./components/Home";
import Login from "./components/Login";
import Activities from "./components/Activities";
import Register from "./components/Register";
import Profile from "./components/Profile";

const App = () => {
  const [routines, setRoutines] = useState([]);
  const [token, setToken] = useState();
  const [activities, setActivities] = useState([]);
  const [userId, setUserId] = useState("");
  const [profile, setProfile] = useState({});
  const [user, setUsers] = useState("");

  return (
    <>
      <header>
        <h1 className="title">Fitness Tracker</h1>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="api/routines">Routines</Link>
        <br></br>
        <Link to="api/myroutines">My Routines</Link>
        <br></br>
        <Link to="api/activities">Activities</Link>
        <br></br>
        <Link to="/api/users/login">Login</Link>
        <br></br>
        <Link to="/api/users/register">Register</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="api/routines"
          element={
            <Routines
              setRoutines={setRoutines}
              routines={routines}
              token={token}
              settoken={setToken}
            />
          }
        />
        <Route
          exact
          path="api/activities"
          element={
            <Activities
              setActivities={setActivities}
              activities={activities}
              token={token}
              settoken={setToken}
            />
          }
        />
        <Route
          path="/api/users/login"
          element={<Login setToken={setToken} setUsers={setUsers} />}
        />
        <Route
          path="/api/users/register"
          element={<Register setToken={setToken} setUsers={setUsers} />}
        />
        <Route
          path="/profile"
          element={
            <Profile
              username={user}
              setUserId={setUserId}
              profile={profile}
              setProfile={setProfile}
              token={token}
            />
          }
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
