import { SetStateAction, Dispatch } from "react";

export type ContextProps = {
  open: boolean;
  onClose: () => void;
  triggerModal: (msg: string) => void;
  setBookedDate: Dispatch<SetStateAction<string>>;
  bookedDate: string;
  message: string;
};
