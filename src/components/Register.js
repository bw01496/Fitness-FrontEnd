import React, { useState } from "react";
const { REACT_APP_API_URL = "https://fitnesstrac-kr.herokuapp.com/api" } =
  process.env;

const Register = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
          } catch (error) {
            console.error(error);
            {
              /* if statement add navigate to profile later*/
            }
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
          type="text"
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
