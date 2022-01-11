import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Routines from "./components/Routines";
import Home from "./components/Home";
import Login from "./components/Login";
import Activities from "./components/Activities";
import Register from "./components/Register";
// import Profile from "./components/Profile";
import Myroutines from "./components/Myroutines";

const App = () => {
  const [routines, setRoutines] = useState([]);
  const [token, setToken] = useState();
  const [activities, setActivities] = useState([]);
  const [loggedIn, setLoggedIn] = useState("");
  // const [profile, setProfile] = useState({});
  const [user, setUsers] = useState("");
  const [myRoutines, setMyRoutines] = useState([]);
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1 className="title">Fitness Tracker</h1>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="api/routines">Routines</Link>
        {""}
        <br></br>
        {loggedIn ? <Link to="api/myroutines">My Routines</Link> : null}
        {loggedIn ? " " : null}
        <br></br>
        <Link to="api/activities">Activities</Link>
        <br></br>
        <Link to="/api/users/login">Login</Link>
        <button
          className={token ? "" : "LoggedOut"}
          onClick={() => {
            localStorage.removeItem("token");
            setLoggedIn(false);
            navigate("/");
          }}
        >
          Log Out
        </button>
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
              loggedIn={loggedIn}
            />
          }
        />
        <Route
          path="api/users/:method"
          element={
            <Login
              setToken={setToken}
              setUsers={setUsers}
              setLoggedIn={setLoggedIn}
              loggedIn={loggedIn}
            />
          }
        />
        <Route
          path="/api/users/register"
          element={<Register setToken={setToken} setUsers={setUsers} />}
        />
        <Route
          path="api/myroutines"
          element={
            <Myroutines
              setMyRoutines={setMyRoutines}
              activities={activities}
              myRoutines={myRoutines}
              user={user}
              loggedIn={loggedIn}
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
