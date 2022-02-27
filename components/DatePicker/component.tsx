import { FC, HTMLAttributes, useState, ChangeEvent, useContext } from "react";
import { ModalContext } from "../../context";

type Props = HTMLAttributes<HTMLInputElement>;

export const DatePicker: FC<Props> = () => {
  const { bookedDate, setBookedDate } = useContext(ModalContext);

  return (
    <>
      <input
        className="w-full px-2 cursor-text rounded-sm shadow-md text-center uppercase outline-1 focus:outline-primary"
        type="date"
        value={bookedDate}
        onChange={(e) => setBookedDate(e.target.value)}
      />
    </>
  );
};
