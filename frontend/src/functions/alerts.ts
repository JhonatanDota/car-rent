import { defaultMaxListeners } from "events";
import toast from "react-hot-toast";

const TOAST_DURATION_MS = 2500;
const DEFAULT_POSITION = "bottom-center";
const DEFAULT_STYLE = {
  borderRadius: "10px",
  background: "#333",
  color: "#fff",
};

export function successToast(message: string) {
  toast.success(message, {
    duration: TOAST_DURATION_MS,
    style: DEFAULT_STYLE,
    position: DEFAULT_POSITION
  });
}

export function failToast(message: string) {
  toast.error(message, {
    duration: TOAST_DURATION_MS,
    style: DEFAULT_STYLE,
    position: DEFAULT_POSITION
  });
}

export function alertToast(message: string) {
  toast(message, {
    icon: '⚠️',
    duration: TOAST_DURATION_MS,
    style: DEFAULT_STYLE,
    position: DEFAULT_POSITION
  });
}
