/** @format */

import { ToastAndroid } from "react-native";

export const Toast = (content: string) => {
  return ToastAndroid.showWithGravity(
    content,
    ToastAndroid.CENTER,
    ToastAndroid.SHORT
  );
};
