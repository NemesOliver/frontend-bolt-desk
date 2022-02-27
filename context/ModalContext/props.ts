export type ContextProps = {
  open: boolean;
  onClose: () => void;
  triggerModal: (msg: string) => void;
  message: string;
};