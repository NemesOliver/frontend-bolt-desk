import { useState, ChangeEvent, FormEvent, useContext } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Button, Input } from "../components";
import { AuthContext } from "../context";

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useContext(AuthContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <>
      <Head>
        <title>Bolt Desk - Log In</title>
        <meta name="description" content="Your desk booking app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-[340px] mx-auto px-1 mt-6 grid items-center h-[calc(90vh-70px)]">
        <section>
          <h2 className="text-[30px] text-center my-4">Fake company ltd.</h2>
          <form onSubmit={handleSubmit}>
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
          <div className="h-[20px] mt-4 text-center text-red-800">{error}</div>
        </section>
      </main>
    </>
  );
};

export default Login;
