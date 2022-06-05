import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

interface ModalProps {
  children: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalEl = document.getElementById("modal") as HTMLDivElement;

  return isBrowser ? ReactDOM.createPortal(children, modalEl) : null;
};
