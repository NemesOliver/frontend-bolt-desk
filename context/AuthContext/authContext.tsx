import { createContext, useState, useEffect, FC } from "react";
import { useRouter } from "next/router";
import { backend } from "../../libs";

export const AuthContext = createContext<any>({});

export const AuthContextProvider: FC = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const Router = useRouter();

  useEffect(() => {
    // See if we are on client
    if (typeof window !== "undefined") {
      const cookies = document.cookie.split(";");

      // if auth cookie exists, user should stay logged in, else we will log user out,
      // we are checking for auth cookie as jwt cookie is httpOnly, therefore can not be accesed by frontend js
      cookies.forEach((cookie) => {
        if (cookie.startsWith("auth")) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      });
    }
  }, []);

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
