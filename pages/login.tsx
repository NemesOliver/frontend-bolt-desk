import { useState, ChangeEvent, FormEvent } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { Button, Input } from "../components";

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // This function will be in Auth context provider
  const [user, setUser] = useState({});

  const login = async (e: FormEvent) => {
    e.preventDefault();
    const user = await axios.post(
      "http://localhost:5000/v1/users/login",
      { email, password },
      { withCredentials: true } // Must be true to allow cookies to be set from server because of CORS
    );
    setUser(user);
  };

  return (
    <>
      <Head>
        <title>Bolt Desk - Log In</title>
        <meta name="description" content="Your desk booking app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-[340px] mx-auto mt-6">
        <h2 className="text-[24px] my-4">Your company name or logo</h2>
        <form>
          <div className="my-6">
            <Input
              label="email"
              type="text"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <div className="my-6">
            <Input
              label="password"
              type="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </div>
          <Button>log in</Button>
        </form>
      </main>
    </>
  );
};

export default Login;
