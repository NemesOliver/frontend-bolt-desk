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
  const [isLoading, setIsloading] = useState(false);
  const Router = useRouter();

  useEffect(() => {
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
  }, []);

  /**
   * Fetch user from backend
   *
   * @param id
   */
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
    setIsloading(true);

    try {
      const { data } = await backend.post("/users/login", { email, password });

      setUser({ email: data.user.email, _id: data.user._id });
      setIsLoggedIn(true);
      setIsloading(false);

      Router.push("/");
    } catch (e) {
      console.warn(e);
      setIsloading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        login,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
