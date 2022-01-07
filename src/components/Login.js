import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router";
import { callApi } from "../utils/api";
const { REACT_APP_API_URL } = process.env;

const Login = ({ setToken, setUsers, loggedIn, setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();
  const [isMatched, setIsMatched] = useState(false);
  const params = useParams();
  console.log(loggedIn);
  function logIn(resp) {
    if (resp) {
      setUsers(resp.user.id);
      setToken(resp.token);
      localStorage.setItem("token", resp.token);
      if (resp.token == "") {
        setLoggedIn(false);
      } else {
        setLoggedIn(true);
        navigate("/api/activities");
      }
    }
  }

  async function loggingIn() {
    try {
      const resp = await callApi({
        url: `/users/${params.method}`,
        method: "POST",
        body: {
          username,
          password,
        },
      });
      logIn(resp);
    } catch (error) {
      console.error(error);
    }
  }
  if (loggedIn === false) {
    return (
      <>
        <h1 className="login">Login</h1>
        <form
          className="login"
          onSubmit={async (event) => {
            event.preventDefault();
            if (params.method !== "register") {
              loggingIn();
            } else if (password === passwordConfirm) {
              setIsMatched(false);
              loggingIn();
            } else {
              setIsMatched(true);
            }
          }}
          // const respObj = await callApi({
          //   url: `/users/login`,
          //   method: "POST",
          //   body: {
          //     user: {
          //       username,
          //       password,
          //     },
          //   },
          // });

          // console.log(respObj);
          // if (respObj.data) {
          //   const userResp = await callApi({
          //     url: "/users/me",
          //     token: respObj.data.token,
          //   });
          //   console.log(userResp.data.username);
          //   setToken(respObj.data.token);
          //   setUsers(userResp.data.username);
          //   if (respObj.data.token) {
          //     navigate("/profile");
          //   }
          // }
        >
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></input>
          <hr></hr>

          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          <hr></hr>
          <button type="submit" disabled={password.length < 7}>
            Submit
          </button>
          <hr></hr>
          {/* {params.method === "register" ? (
            <input
              type="text"
              placeholder="password"
              value={passwordConfirm}
              onChange={(event) => setPasswordConfirm(event.target.value)}
            ></input>
          ) : null} */}
          <Link to="/api/users/register">Register</Link>
        </form>
        {password.length < 7 && params.method === "register" ? (
          <div>
            <h4>
              Your password must be at least 7 characters long. Please try again
            </h4>
          </div>
        ) : null}
        {/* <div className={isMatched ? "" : "noMatch"}>
          <h4>Your passwords don't match.</h4>
        </div> */}
      </>
    );
  } else {
    return (
      <>
        <h1>Testing</h1>
      </>
    );
  }
};
export default Login;
