import React, { useState } from "react";
import { useNavigate } from "react-router";
const { REACT_APP_API_URL = "https://fitnesstrac-kr.herokuapp.com/api" } =
  process.env;

const Register = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <h1>Register</h1>
      <form
        onSubmit={async (event) => {
          try {
            event.preventDefault();
            const resp = await fetch(`${REACT_APP_API_URL}/users/register`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username,
                password,
              }),
            });
            const respObj = await resp.json();
            console.log(respObj);
            setToken(respObj.data.token);
            if (respObj.data.token) {
              navigate("/profile");
            }
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <br></br>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <br></br>

        <button type="submit" disabled={!password || !username}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Register;
