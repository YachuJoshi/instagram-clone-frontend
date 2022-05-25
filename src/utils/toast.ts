import { toast } from "react-toastify";
import { toastMessage, ToastType } from "../components";

export const notify = (type: ToastType, message: string) => {
  toastMessage({ type, message });
};

export const dismiss = () => toast.dismiss();
