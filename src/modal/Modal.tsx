import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

import styles from "./Modal.module.scss";

interface ModalProps {
  children: React.ReactNode;
  onModalClose: () => void;
}

export const Modal = ({ children, onModalClose }: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalEl = document.getElementById("modal") as HTMLDivElement;

  return isBrowser
    ? ReactDOM.createPortal(
        <>
          <div className={styles.Overlay} onClick={onModalClose}></div>
          {children}
        </>,
        modalEl
      )
    : null;
};
