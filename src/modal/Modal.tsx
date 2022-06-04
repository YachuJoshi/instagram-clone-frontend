import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { ModalContent } from "./ModalContent";
import { Post } from "../types";

interface ModalProps {
  username: string;
  post: Post;
  onModalClose: () => void;
}

export const Modal = (props: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalEl = document.getElementById("modal") as HTMLDivElement;

  return isBrowser
    ? ReactDOM.createPortal(<ModalContent {...props} />, modalEl)
    : null;
};
