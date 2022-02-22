import React, { FC } from "react";
import { Logo } from "./libs";

// Wrap me in a Container with some padding but careful of logo as it might be missaligned

export const Header: FC = () => {
  return (
    <header className="bg-background shadow-md h-10 flex items-center justify-between">
      <div className="w-20 h-10">
        <Logo />
      </div>
      {/* <p> tag will show user */}
      <p>John Doe</p>
    </header>
  );
};
