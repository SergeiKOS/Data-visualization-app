import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const customAlert = (message: string): void => {
  toast.warn(message);
};

export const NotificationComponent = ToastContainer;
