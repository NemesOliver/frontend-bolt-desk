import { createContext, useState, useEffect, FC } from "react";
import { useRouter } from "next/router";
import { getCookies } from "cookies-next";
import { backend } from "../../libs";

export const AuthContext = createContext<any>({});

type User = {
  email: string;
  _id: string;
};

export const AuthContextProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const Router = useRouter();

  useEffect(() => {
    // See if we are on client
    if (typeof window !== "undefined") {
      const cookies = getCookies();

      // if auth cookie exists, user should stay logged in, else we will log user out,
      // we are checking for auth cookie as jwt cookie is httpOnly, therefore can not be accesed by frontend js
      if (cookies.auth) {
        setIsLoggedIn(true);
        // If logged in fetch user
        getUser(cookies.user);
      } else {
        setIsLoggedIn(false);
      }
    }
  }, []);

  const getUser = async (id: string) => {
    try {
      const { data } = await backend.get(`/users/${id}`);

      setUser({ email: data.email, _id: data._id });
    } catch (e) {
      console.warn(e);
    }
  };

  /**
   * Fire POST request to backend to log user in
   * @param email
   * @param password
   */
  const login = async (email: string, password: string) => {
    try {
      const { data } = await backend.post("/users/login", { email, password });

      setUser(data);
      setIsLoggedIn(true);

      Router.push("/");
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
