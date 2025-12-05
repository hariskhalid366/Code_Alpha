/** @format */

import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const wp = (value: number) => {
  return (width * value) / 100;
};

export const hp = (value: number) => {
  return (height * value) / 100;
};
