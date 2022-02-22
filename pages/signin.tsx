import React, { SyntheticEvent, useState } from "react";
import type { NextPage } from "next";
import axios from "axios";

const Signin: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const signin = async (e: SyntheticEvent) => {
    e.preventDefault();
    const user = await axios.post("http://localhost:5000/v1/users/create", {
      email,
      password,
    });
    setUser(user);
  };

  

  return (
    <div>
      <h2>SIGN IN</h2>
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
        <button onClick={signin}>log in</button>
      </form>
    </div>
  );
};

export default Signin;
