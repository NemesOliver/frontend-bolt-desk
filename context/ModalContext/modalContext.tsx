import { createContext, FC, useState } from "react";

export const ModalContext = createContext({} as any);

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
