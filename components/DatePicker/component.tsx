import React, { FC, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLInputElement>;

export const DatePicker: FC<Props> = () => {
  return (
    <>
      <label className="text-[16px]">Select a Date</label>
      <input
        className="w-full px-2 cursor-text rounded-sm shadow-md text-center uppercase outline-1 focus:outline-primary"
        type="date"
      />
    </>
  );
};
