import React, { FC } from "react";
import { Header } from "../../components";

export const Layout: FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
