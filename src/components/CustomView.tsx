/** @format */

import React, { FC } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { useColors } from "../constants/colors";

interface ViewProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const CustomView: FC<ViewProps> = ({ children, style }) => {
  const Colors = useColors();
  return (
    <View style={[style, { backgroundColor: Colors.background }]}>
      {children}
    </View>
  );
};

export default CustomView;

const styles = StyleSheet.create({});
