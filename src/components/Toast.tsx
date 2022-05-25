import { toast } from "react-toastify";

export type ToastType = "success" | "info" | "error" | "warning" | "default";

interface Props {
  type: ToastType;
  message: string;
}

export const toastMessage = ({ type, message }: Props) => {
  toast(
    <div style={{ display: "flex", color: "white" }}>
      <div style={{ flexGrow: 1, fontSize: 15, padding: "8px 12px" }}>
        {message}
      </div>
    </div>,
    {
      type,
    }
  );
};
