import { useToast } from "vue-toastification";
import { i18n } from "@/main";
import {
  ToastContent,
  ToastID,
  ToastOptions,
} from "vue-toastification/dist/types/types";
import { TYPE } from "vue-toastification/dist/types/ts/constants";

const UNKNOWN_ERROR = "toast.error.unknownError";
const toast = useToast();

const success = (
  content: ToastContent,
  options?: (ToastOptions & { type?: TYPE.SUCCESS | undefined }) | undefined
): ToastID => {
  const newContent =
    typeof content === "string" && i18n.global.te(content)
      ? i18n.global.t(content)
      : content;
  return toast.success(newContent, options);
};
const error = (
  content?: ToastContent,
  options?: (ToastOptions & { type?: TYPE.ERROR | undefined }) | undefined
): ToastID => {
  if (!content) {
    return error(UNKNOWN_ERROR);
  }
  const newContent =
    typeof content === "string" && i18n.global.te(content)
      ? i18n.global.t(content)
      : content;
  return toast.error(newContent, options);
};
const info = (
  content: ToastContent,
  options?: (ToastOptions & { type?: TYPE.INFO | undefined }) | undefined
): ToastID => {
  const newContent =
    typeof content === "string" && i18n.global.te(content)
      ? i18n.global.t(content)
      : content;
  return toast.info(newContent, options);
};
const warning = (
  content: ToastContent,
  options?: (ToastOptions & { type?: TYPE.WARNING | undefined }) | undefined
): ToastID => {
  const newContent =
    typeof content === "string" && i18n.global.te(content)
      ? i18n.global.t(content)
      : content;
  return toast.warning(newContent, options);
};

export default { success, error, info, warning };
