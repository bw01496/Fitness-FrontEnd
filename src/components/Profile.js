// import React, { useState, useEffect } from "react";
// import { callApi } from "../utils/api";

// const Profile = ({ username, profile, setProfile, setUserId, token }) => {
//   const fetchProfile = async () => {
//     const resp = await callApi({
//       url: "/users/me",
//       token,
//     });
//     console.log(resp);

//     setUserId(resp.data._id);
//     setProfile(resp.data);
//   };
//   useEffect(() => {
//     try {
//       token ? fetchProfile() : null;
//     } catch (error) {
//       console.error(error);
//     }
//   }, [token]);

//   return (
//     <>
//       <h1>Profile</h1>

//       {username ? <p>You are logged in as {username}</p> : ""}

//       <h1 className="message">{profile.username ? profile.username : ""}</h1>
//       {messages.map((item) =>
//         profile._id !== item.fromUser._id ? (
//           <div className="post" key={item._id}>
//             <h2>Title: {item.post.title}</h2>
//             <h3>From: {item.fromUser.username}</h3>
//             <h4>{item.content}</h4>
//           </div>
//         ) : null
//       )}
//     </>
//   );
// };

// export default Profile;
