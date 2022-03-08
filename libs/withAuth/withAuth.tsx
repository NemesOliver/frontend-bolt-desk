import { FunctionComponent, useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../context";
import { Backdrop } from "../../components";

export const withAuth = (Component: FunctionComponent) => {
  return function Wrapper(props: any) {
    const Router = useRouter();
    const { isLoggedIn } = useContext(AuthContext);

    //Check if we are on client

    // if loading show loader
    if (isLoggedIn === null) {
      return <Backdrop />;
    }

    // if no user redirect to /login
    if (!isLoggedIn) {
      Router.replace("/login");
      return null;
    }

    // if logged in
    return <Component {...props} />;
  };
};
