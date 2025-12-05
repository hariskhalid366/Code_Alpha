/** @format */

import { router } from "expo-router";
import * as Icons from "lucide-react-native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColors } from "../constants/colors";
import { hp, wp } from "../utils/responsive";

const Header = () => {
  const colors = useColors();
  const { top } = useSafeAreaInsets();
  const iconS = {
    backgroundColor: colors.background,
    borderColor: colors.text,
    borderWidth: 1,
  };

  return (
    <View style={[styles.container, { marginTop: top }]}>
      <Icons.Quote color={colors.text} fill={colors.text} size={wp(7)} />
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => router.navigate("/bookmark")}
          style={[styles.search, iconS]}>
          <Icons.Bookmark fill={colors.text} size={wp(6)} color={colors.text} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.navigate("/search")}
          style={[styles.search, iconS]}>
          <Icons.Search color={colors.text} size={wp(6)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    width: wp(100),
    minHeight: hp(6),
  },

  search: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    elevation: 5,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 10,
  },
});
