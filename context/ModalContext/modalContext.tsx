import { createContext, FC, useState } from "react";
import { ContextProps } from "./props";

export const ModalContext = createContext({} as ContextProps);

export const ModalContextProvider: FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const onClose = () => setOpen(false);

  const triggerModal = (msg: string) => {
    setOpen(true);
    setMessage(msg);
  };

  return (
    <ModalContext.Provider
      value={{
        open,
        onClose,
        triggerModal,
        message,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
