/** @format */

import { router } from "expo-router";
import * as Icons from "lucide-react-native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColors } from "../constants/colors";
import { hp, wp } from "../utils/responsive";
import CustomText from "./CustomText";

const ScreenHeader = ({ title }: any) => {
  const colors = useColors();
  const iconS = {
    backgroundColor: colors.background,
    borderColor: colors.text,
    borderWidth: 1,
    elevation: 5,
  };
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { marginTop: top }]}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={[styles.icon, iconS]}>
        <Icons.ChevronLeft size={wp(6)} color={colors.text} />
      </TouchableOpacity>
      <CustomText variant="h2" fontWeight={"bold"}>
        {title}
      </CustomText>
      <View style={[styles.icon]} />
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    width: wp(100),
    minHeight: hp(8),
  },
  icon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
});
