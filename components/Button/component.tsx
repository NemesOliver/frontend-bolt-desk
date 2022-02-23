import React, { FC, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({ children }) => {
  return (
    <button className="bg-primary w-full py-1 text-white text-[18px] rounded-sm uppercase hover:scale-105 transition-transform active:scale-95">
      {children}
    </button>
  );
};
