import axios from "axios";
import type { NextPage } from "next";
import React, { SyntheticEvent, useState } from "react";

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const login = async (e: SyntheticEvent) => {
    e.preventDefault();
    const user = await axios.post(
      "http://localhost:5000/v1/users/login",
      { email, password },
      { withCredentials: true } // Must be true to allow cookies to be set from server because of CORS
    );
    setUser(user);
  };


  return (
    <div>
      <h2>LOG IN</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={login}>log in</button>
      </form>
    </div>
  );
};

export default Login;
