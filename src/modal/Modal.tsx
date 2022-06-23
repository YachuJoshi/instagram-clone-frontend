import ReactDOM from "react-dom";
import cx from "classnames";
import { useState, useEffect } from "react";

import styles from "./Modal.module.scss";

interface ModalProps {
  children: React.ReactNode;
  isModalOpen: boolean;
  onModalClose: () => void;
}

export const Modal = ({ children, isModalOpen, onModalClose }: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalEl = document.getElementById("modal") as HTMLDivElement;

  return isBrowser
    ? ReactDOM.createPortal(
        <div
          className={cx(styles.Modal, {
            [styles.Visible]: isModalOpen,
          })}
        >
          <div className={styles.Overlay} onClick={onModalClose}></div>
          {children}
        </div>,
        modalEl
      )
    : null;
};
