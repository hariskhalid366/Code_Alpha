/** @format */

import * as Icons from "lucide-react-native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { router } from "expo-router";
import { useColors } from "../constants/colors";
import { hp, wp } from "../utils/responsive";
import CustomText from "./CustomText";

type FooterProps = {
  savePress?: () => void;
  sharePress?: () => void;
  isExist: boolean;
};

const Footer = ({ savePress, sharePress, isExist }: FooterProps) => {
  const colors = useColors();
  const iconS = {
    backgroundColor: colors.background,
    borderColor: colors.text,
    borderWidth: 1,
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.navigate("/morequotes")}
        style={[styles.more, iconS]}>
        <CustomText variant="h4">Tap for more</CustomText>
      </TouchableOpacity>
      <View style={styles.iconView}>
        <TouchableOpacity onPress={savePress} style={[styles.icon, iconS]}>
          <Icons.Bookmark
            size={wp(6)}
            fill={isExist ? colors.text : "transparent"}
            color={colors.text}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={sharePress} style={[styles.icon, iconS]}>
          <Icons.Share size={wp(6)} color={colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
    width: wp(100),
    minHeight: hp(8),
  },
  more: {
    width: wp(60),
    padding: 10,
    borderRadius: 20,
    elevation: 10,
    alignItems: "center",
  },
  iconView: {
    flexDirection: "row",
    gap: 10,
  },
  icon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,

    elevation: 5,
  },
});
