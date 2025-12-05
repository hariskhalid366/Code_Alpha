/** @format */

import { useColorScheme } from "react-native";

export const useColors = () => {
  const systemScheme = useColorScheme();

  return systemScheme === "dark" ? DarkTheme : LightTheme;
};

export enum DarkTheme {
  background = "#0D0D0D",
  text = "#FFFFFF",
  inputBackground = "#2A2A2A",
  tagBg = "#ffffff55",
  author = "#ffffff77",
}

export enum LightTheme {
  background = "#ffffff",
  text = "#222",
  tagBg = "#0D0D0D11",
  author = "#00000077",
  inputBackground = "#F2F2F2",
}
