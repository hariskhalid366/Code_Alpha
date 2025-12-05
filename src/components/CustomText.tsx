/** @format */

import React, { FC } from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import { useColors } from "../constants/colors";
import { wp } from "../utils/responsive";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body";

interface CustomTextProps {
  variant?: Variant;
  fontWeight?: TextStyle["fontWeight"];
  fontSize?: number; // will override variant size
  color?: string;
  style?: TextStyle | TextStyle[];
  children?: React.ReactNode;
  numberOfLines?: number;
  onLayout?: (event: any) => void;
}

const variantSizes: Record<Variant, number> = {
  h1: 7,
  h2: 6,
  h3: 5,
  h4: 4,
  h5: 3.5,
  h6: 3,
  body: 3,
};

const CustomText: FC<CustomTextProps> = ({
  variant = "body",
  fontWeight = "400",
  fontSize,
  style,
  color,
  children,
  numberOfLines,
  onLayout,
  ...props
}) => {
  const Colors = useColors();

  const finalFontSize = fontSize ? wp(fontSize) : wp(variantSizes[variant]);

  return (
    <Text
      selectable={true}
      style={[
        styles.text,
        {
          color: color || Colors.text,
          fontSize: finalFontSize,
          fontWeight,
        },
        style,
      ]}
      onLayout={onLayout}
      numberOfLines={numberOfLines}
      {...props}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    textAlign: "left",
  },
});
